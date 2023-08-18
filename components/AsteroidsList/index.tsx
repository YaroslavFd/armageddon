'use client';

import React from 'react';

import { getCardData } from '@/utils/helpers/getCardData';

import { Card } from './Card';
import styles from './styles.module.scss';

interface AsteroidsListProps {
  asteroids: NearEarthObject[];
}

export type SwitchButtonType = 'km' | 'lunar';

export const AsteroidsList = ({ asteroids }: AsteroidsListProps) => {
  const [activeBtn, setActiveBtn] = React.useState<SwitchButtonType>('km');

  const isArrayEmpty = !Array.isArray(asteroids) || asteroids.length < 1 || !asteroids;

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Ближайшие подлёты астероидов</h2>
        <div className={styles.switches}>
          <button
            className={activeBtn === 'km' ? styles.active : ''}
            onClick={() => setActiveBtn('km')}
          >
            в километрах
          </button>
          <span>|</span>
          <button
            className={activeBtn === 'lunar' ? styles.active : ''}
            onClick={() => setActiveBtn('lunar')}
          >
            в лунных орбитах
          </button>
        </div>
      </div>
      {!isArrayEmpty ? (
        asteroids.map((asteroid) => {
          const cardData = getCardData({
            activeBtn,
            closeApproachDatum: asteroid.close_approach_data,
            diameter: asteroid.estimated_diameter.meters
          });

          return (
            <Card
              key={asteroid.id}
              dangerous={asteroid.is_potentially_hazardous_asteroid}
              diameter={cardData.diameterNum}
              distance={cardData.distance}
              formattedDate={cardData.formattedDate}
              id={asteroid.id}
              name={asteroid.name_limited}
            />
          );
        })
      ) : (
        <h3>Список астероидов пуст</h3>
      )}
    </div>
  );
};
