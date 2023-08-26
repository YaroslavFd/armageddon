'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/Button';
import { useCartInfoStore } from '@/store/cartInfo';
import { getCartItemsFromLocalStorage } from '@/utils/helpers/getCartItemsFromLocalStorage';

import styles from './styles.module.scss';

interface CardProps {
  id: string;
  name: string;
  diameter: number;
  dangerous: boolean;
  distance: string;
  formattedDate: string;
}

const BIG_DIAMETER = 10000;

export const Card = ({ id, name, diameter, dangerous, distance, formattedDate }: CardProps) => {
  const items = getCartItemsFromLocalStorage();
  const itemInCart = !!items.filter((item) => item.id === id).length;

  const [inCart, setInCart] = React.useState(itemInCart);
  const pathname = usePathname();

  const addItem = useCartInfoStore((state) => state.addItem);

  const onClickAdd = () => {
    if (inCart) return;

    const newItem: CardItem = {
      dangerous,
      diameter,
      distance,
      formattedDate,
      id,
      name
    };

    addItem(newItem);
    setInCart(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{formattedDate}</div>
      <div className={styles.info}>
        <div className={styles.distance}>
          <div>
            <span>{distance}</span>
            <svg
              fill='none'
              height='6'
              viewBox='0 0 129 6'
              width='129'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 3L5 5.88675L5 0.113249L0 3ZM129 3.00001L124 0.113259L124 5.88676L129 3.00001ZM4.5 3.5L124.5 3.50001L124.5 2.50001L4.5 2.5L4.5 3.5Z'
                fill='white'
                fillOpacity='0.5'
              />
            </svg>
          </div>
        </div>
        <Link className={styles.asteroid} href={`/asteroid/${id}`}>
          <Image
            alt='asteroid'
            height={diameter > BIG_DIAMETER ? 40 : 24}
            src='/asteroid.png'
            width={diameter > BIG_DIAMETER ? 37 : 22}
          />
          <div className={styles.box}>
            <p>{name}</p>
            <span>Ø {diameter} м</span>
          </div>
        </Link>
      </div>

      <div className={styles.bottom}>
        {pathname !== '/cart' && (
          <Button
            appearance='accent-dull'
            className={inCart ? styles.inCart : ''}
            text={inCart ? 'В корзине' : 'Заказать'}
            onClick={onClickAdd}
          />
        )}
        {dangerous && (
          <div className={styles.dangerous}>
            <span>⚠️</span> Опасен
          </div>
        )}
      </div>
    </div>
  );
};
