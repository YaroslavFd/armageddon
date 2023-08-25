import { produce } from 'immer';
import { create } from 'zustand';

import { getCartItemsFromLocalStorage } from '@/utils/helpers/getCartItemsFromLocalStorage';

interface CartInfoStoreProps {
  quantity: number;
  addItem: (newItem: CardItem) => void;
}

export const useCartInfoStore = create<CartInfoStoreProps>((set) => ({
  quantity: getCartItemsFromLocalStorage().length,

  addItem: (newItem: CardItem) =>
    set(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      produce((state) => {
        const existingItemsJSON = localStorage.getItem('cartItems');
        const existingItems = existingItemsJSON ? JSON.parse(existingItemsJSON) : [];
        existingItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(existingItems));

        state.quantity += 1;
      })
    )
}));
