'use client';

import Image from 'next/image';
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
            <svg fill='none' viewBox='0 0 105 6' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 3L5 5.88675L5 0.113249L0 3ZM105 3.00001L100 0.113257L100 5.88676L105 3.00001ZM4.5 3.5L100.5 3.50001L100.5 2.50001L4.5 2.5L4.5 3.5Z'
                fill='white'
                fillOpacity='0.5'
              />
            </svg>
          </div>
        </div>
        <div className={styles.asteroid}>
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
        </div>
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
