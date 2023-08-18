export const getCartItemsFromLocalStorage = (): CardItem[] => {
  const itemsJSON = localStorage.getItem('cartItems');
  return itemsJSON ? (JSON.parse(itemsJSON) as CardItem[]) : [];
};
