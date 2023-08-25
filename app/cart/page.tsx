'use client';

import React from 'react';

import { Card } from '@/components/AsteroidsList/Card';
import { getCartItemsFromLocalStorage } from '@/utils/helpers/getCartItemsFromLocalStorage';

import styles from './page.module.scss';

export const CartPage = () => {
  const cartItems = getCartItemsFromLocalStorage();

  return (
    <div className={styles.wrapper}>
      {!cartItems.length ? <h2>Заказов пока нет :/</h2> : <h2>Заказ отправлен!</h2>}
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
