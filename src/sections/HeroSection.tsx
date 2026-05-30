import { useRef, useState, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import * as THREE from 'three';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { heroImages } from '@/data/content';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uImageResolution;
  uniform float uProgress;
  uniform float uTime;
  uniform float uDistortion;
  varying vec2 vUv;

  // Simplex noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Cover-fit UV
    float screenAspect = uResolution.x / uResolution.y;
    float imageAspect = uImageResolution.x / uImageResolution.y;
    vec2 coverUv = uv;
    if (screenAspect > imageAspect) {
      float scale = imageAspect / screenAspect;
      coverUv.y = uv.y * scale + (1.0 - scale) * 0.5;
    } else {
      float scale = screenAspect / imageAspect;
      coverUv.x = uv.x * scale + (1.0 - scale) * 0.5;
    }

    // Wave distortion
    float noise = snoise(coverUv * 3.0 + uTime * 0.3);
    float wave = sin(coverUv.y * 10.0 + uTime * 1.5 + noise * 2.0) * uDistortion * (1.0 - uProgress);
    
    // Radial reveal from center
    vec2 center = vec2(0.5, 0.5);
    float dist = length(coverUv - center);
    float reveal = smoothstep(1.0, 0.0, dist - uProgress * 1.5 + noise * 0.2);
    
    // Chromatic aberration based on distortion
    float aberration = wave * 0.01;
    vec4 colorR = texture2D(uTexture, coverUv + vec2(aberration, 0.0));
    vec4 colorG = texture2D(uTexture, coverUv);
    vec4 colorB = texture2D(uTexture, coverUv - vec2(aberration, 0.0));
    
    vec4 color = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    
    // Brightness boost during reveal
    float brightness = 1.0 + reveal * 0.3 * (1.0 - uProgress);
    color.rgb *= brightness;
    
    // Darken edges for vignette
    float vignette = 1.0 - smoothstep(0.4, 1.2, dist);
    color.rgb *= mix(0.7, 1.0, vignette);
    
    gl_FragColor = color;
  }
`;

interface ImagePlaneProps {
  texture: THREE.Texture;
  position: [number, number, number];
  size: [number, number];
  progress: React.MutableRefObject<number>;
  distortion: React.MutableRefObject<number>;
}

function ImagePlane({ texture, position, size, progress, distortion }: ImagePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uResolution: { value: new THREE.Vector2(size[0], size[1]) },
      uImageResolution: { value: new THREE.Vector2((texture.image as HTMLImageElement)?.naturalWidth || 1024, (texture.image as HTMLImageElement)?.naturalHeight || 1024) },
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uDistortion: { value: 0.08 },
    }),
    [texture, size]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uProgress.value = progress.current;
      materialRef.current.uniforms.uDistortion.value = distortion.current;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[size[0], size[1], 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

function HeroScene({ onReveal }: { onReveal: () => void }) {
  const { viewport, size } = useThree();
  const progressRef = useRef(0);
  const distortionRef = useRef(0.08);
  const [clicked, setClicked] = useState(false);
  const textures = useTexture(heroImages);

  const isSmallMobile = size.width < 480;
  const isMobile = size.width < 768;
  
  const gridCols = isSmallMobile ? 2 : isMobile ? 3 : 4;
  const gridRows = isSmallMobile ? 6 : isMobile ? 4 : 3;
  const gap = 0.05;

  const planeWidth = (viewport.width - gap * (gridCols + 1)) / gridCols;
  const planeHeight = (viewport.height - gap * (gridRows + 1)) / gridRows;

  const planes = useMemo(() => {
    const items: { pos: [number, number, number]; tex: THREE.Texture }[] = [];
    let idx = 0;
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const x = -viewport.width / 2 + gap + planeWidth / 2 + col * (planeWidth + gap);
        const y = viewport.height / 2 - gap - planeHeight / 2 - row * (planeHeight + gap);
      items.push({
        pos: [x, y, 0],
          tex: textures[idx % textures.length],
      });
        idx++;
    }
    }
    return items;
  }, [textures, viewport, planeWidth, planeHeight]);

  const handleClick = useCallback(() => {
    if (clicked) return;
    setClicked(true);
    
    gsap.to(progressRef, {
      current: 1,
      duration: 3,
      ease: 'power2.inOut',
      onComplete: onReveal,
    });
    
    gsap.to(distortionRef, {
      current: 0,
      duration: 3,
      ease: 'power2.inOut',
    });
  }, [clicked, onReveal]);

  return (
    <group onClick={handleClick}>
      {/* Invisible hit plane */}
      <mesh position={[0, 0, -0.1]} visible={false}>
        <planeGeometry args={[viewport.width * 2, viewport.height * 2]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      {planes.map((plane, i) => (
        <ImagePlane
          key={i}
          texture={plane.tex}
          position={plane.pos}
          size={[planeWidth, planeHeight]}
          progress={progressRef}
          distortion={distortionRef}
        />
      ))}
    </group>
  );
}

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-pz-navy">
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <HeroScene onReveal={() => setRevealed(true)} />
      </Canvas>

      {/* Click Prompt */}
      {!revealed && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center">
            <div className="animate-pulse-subtle bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <p className="font-inter text-white text-lg font-medium">
                Cliquez pour découvrir
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Overlay Text */}
      {revealed && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black/20 backdrop-blur-sm"
        >
          <div className="text-center max-w-4xl px-6">
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-white font-normal leading-tight mb-6 drop-shadow-md">
              Le Luxe du Vin Sans Alcool
            </h1>
            <p className="font-inter text-lg md:text-xl text-white/90 mb-8 font-medium drop-shadow-sm">
              Pierre Zéro Chardonnay — 0% Alcool, 100% Plaisir
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !bg-pz-navy text-base"
              >
                Commander sur WhatsApp
              </a>
              <a href="#produit" className="btn-secondary border-white text-white hover:bg-white hover:text-pz-navy">
                Découvrir Notre Vin
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
