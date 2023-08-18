'use client';

import React from 'react';

import { Card } from '@/components/AsteroidsList/Card';
import { getCartItemsFromLocalStorage } from '@/utils/helpers/getCartItemsFromLocalStorage';

import styles from './page.module.scss';

export const CartPage = () => {
  const cartItems = getCartItemsFromLocalStorage();

  console.log(cartItems);

  return (
    <div className={styles.wrapper}>
      <h2>Заказ отправлен!</h2>
      {cartItems.map((item) => (
        <Card
          key={item.id}
          dangerous={item.dangerous}
          diameter={item.diameter}
          distance={item.distance}
          formattedDate={item.formattedDate}
          id={item.id}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default CartPage;
