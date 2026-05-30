import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { CartItem, CartState, Product } from '@/types';

interface CartContextType {
  state: CartState;
  addItem: (product: Product, format: 'single' | 'carton6') => void;
  removeItem: (productId: string, format: 'single' | 'carton6') => void;
  updateQuantity: (productId: string, format: 'single' | 'carton6', quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; format: 'single' | 'carton6' } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; format: 'single' | 'carton6' } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; format: 'single' | 'carton6'; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_STATE'; payload: CartState };

const CART_STORAGE_KEY = 'pierre-zero-cart';

function getPrice(product: Product, format: 'single' | 'carton6'): number {
  return format === 'single' ? product.formats.single.price : product.formats.carton6.price;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, format } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.format === format
      );

      let newItems: CartItem[];
      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [
          ...state.items,
          {
            product,
            format,
            quantity: 1,
            price: getPrice(product, format),
          },
        ];
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const { productId, format } = action.payload;
      const newItems = state.items.filter(
        (item) => !(item.product.id === productId && item.format === format)
      );
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, format, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(
          (item) => !(item.product.id === productId && item.format === format)
        );
        const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { items: newItems, total };
      }
      const newItems = state.items.map((item) =>
        item.product.id === productId && item.format === format
          ? { ...item, quantity }
          : item
      );
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    case 'LOAD_STATE':
      return action.payload;

    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        dispatch({ type: 'LOAD_STATE', payload: parsed });
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product, format: 'single' | 'carton6') => {
    dispatch({ type: 'ADD_ITEM', payload: { product, format } });
  };

  const removeItem = (productId: string, format: 'single' | 'carton6') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, format } });
  };

  const updateQuantity = (productId: string, format: 'single' | 'carton6', quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, format, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
