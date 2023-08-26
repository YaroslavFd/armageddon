'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Card } from '@/components/AsteroidsList/Card';
import { Button } from '@/components/ui/Button';
import { useCartInfoStore } from '@/store/cartInfo';
import { getCartItemsFromLocalStorage } from '@/utils/helpers/getCartItemsFromLocalStorage';

import styles from './page.module.scss';

export const CartPage = () => {
  const router = useRouter();

  const cartItems = getCartItemsFromLocalStorage();
  const resetCart = useCartInfoStore((state) => state.resetCart);

  const onClickBtn = () => {
    resetCart();
    router.push('/');
  };

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

      {!!cartItems.length && <Button text='Очистить корзину' onClick={onClickBtn} />}
    </div>
  );
};

export default CartPage;
