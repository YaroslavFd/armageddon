import { produce } from 'immer';
import { create } from 'zustand';

import { getCartItemsFromLocalStorage } from '@/utils/helpers/getCartItemsFromLocalStorage';

interface CartInfoStoreProps {
  quantity: number;
  addItem: (newItem: CardItem) => void;
  resetCart: () => void;
}

export const useCartInfoStore = create<CartInfoStoreProps>((set) => ({
  quantity: getCartItemsFromLocalStorage().length,

  addItem: (newItem: CardItem) =>
    set(
      produce((state) => {
        const existingItemsJSON = localStorage.getItem('cartItems');
        const existingItems = existingItemsJSON ? JSON.parse(existingItemsJSON) : [];
        existingItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(existingItems));

        state.quantity += 1;
      })
    ),

  resetCart: () =>
    set(
      produce((state) => {
        localStorage.removeItem('cartItems');
        state.quantity = 0;
      })
    )
}));
