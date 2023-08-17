import Image from 'next/image';
import React from 'react';

import type { SwitchButtonType } from '@/components/AsteroidsList';
import { Button } from '@/components/ui/Button';
import { useCardData } from '@/utils/hooks/useCardData';

import styles from './styles.module.scss';

export type DiameterType = {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
};

interface CardProps {
  name: string;
  diameter: DiameterType;
  closeApproachDatum: CloseApproachDatum[];
  dangerous: boolean;
  activeBtn: SwitchButtonType;
}

export const Card = ({ name, diameter, closeApproachDatum, dangerous, activeBtn }: CardProps) => {
  const cardData = useCardData({
    activeBtn,
    closeApproachDatum,
    diameter
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{cardData.formattedDate}</div>
      <div className={styles.info}>
        <div className={styles.distance}>
          <div>
            <span>{cardData.distance}</span>
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
            height={cardData.diameterNum > 10000 ? 40 : 24}
            src='/asteroid.png'
            width={cardData.diameterNum > 10000 ? 37 : 22}
          />
          <div className={styles.box}>
            <p>{name}</p>
            <span>Ø {cardData.diameterNum} м</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Button appearance='accent-dull' text='Заказать' />
        {dangerous && (
          <div className={styles.dangerous}>
            <span>⚠️</span> Опасен
          </div>
        )}
      </div>
    </div>
  );
};
