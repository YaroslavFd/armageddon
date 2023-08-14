import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/Button';

import styles from './styles.module.scss';

export const Card = () => (
  <div className={styles.wrapper}>
    <div className={styles.date}>12 сент 2023</div>
    <div className={styles.info}>
      <div className={styles.distance}>
        <div>
          <span>5 652 475 км</span>
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
        <Image alt='asteroid' height={40} src='/asteroid.png' width={37} />
        <div className={styles.box}>
          <p>2021 FQ</p>
          <span>Ø 85 м</span>
        </div>
      </div>
    </div>

    <div className={styles.bottom}>
      <Button appearance='accent-dull' text='Заказать' />
      <div className={styles.dangerous}>
        <span>⚠️</span> Опасен
      </div>
    </div>
  </div>
);
