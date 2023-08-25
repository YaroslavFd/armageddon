'use client';

import { useRouter } from 'next/navigation';

import { useCartInfoStore } from '@/store/cartInfo';
import { declensionOfAsteroids } from '@/utils/helpers/declensionOfAsteroids';

import { Button } from '../ui/Button';

import styles from './styles.module.scss';

export const Cart = () => {
  const router = useRouter();

  const quantity = useCartInfoStore((state) => state.quantity);

  const onClickBtn = () => {
    router.push('/cart');
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Корзина</h3>
        <span>{declensionOfAsteroids(quantity)}</span>
      </div>
      <Button disabled={!quantity} text='Отправить' onClick={onClickBtn} />
    </div>
  );
};
