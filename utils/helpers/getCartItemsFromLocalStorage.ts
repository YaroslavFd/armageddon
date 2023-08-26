export const getCartItemsFromLocalStorage = (): CardItem[] => {
  if (typeof window !== 'undefined') {
    const itemsJSON = localStorage.getItem('cartItems');
    return itemsJSON ? (JSON.parse(itemsJSON) as CardItem[]) : [];
  }
  return [];
};
