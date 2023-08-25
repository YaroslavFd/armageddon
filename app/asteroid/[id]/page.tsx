import Image from 'next/image';
import React from 'react';

import { fetchAsteroids } from '@/utils/api';
import { formatDate } from '@/utils/helpers/formatDate';

import styles from './page.module.scss';

interface AsteroidProps {
  params: {
    id: string;
  };
}

export const Asteroid = async ({ params: { id } }: AsteroidProps) => {
  const asteroids = await fetchAsteroids();

  const asteroid = asteroids.near_earth_objects.filter(
    (asteroid) => Number(asteroid.id) === Number(id)
  )[0];

  const diameterNum = Math.floor(
    (asteroid.estimated_diameter.meters.estimated_diameter_min +
      asteroid.estimated_diameter.meters.estimated_diameter_max) /
      2
  );

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{asteroid.name}</h3>
      <div className={styles.smallInfo}>
        <span>Диаметр астероида: {diameterNum} м</span>
        <span>
          Опасен ли астероид:{' '}
          {asteroid.is_potentially_hazardous_asteroid ? '⚠️ Опасен' : '😇 Не опасен'}
        </span>
      </div>
      <div className={styles.approaches}>
        <h4>Все сближения астероида:</h4>
        {asteroid.close_approach_data.map((item) => (
          <div className={styles.box}>
            <span className={styles.date}>{formatDate(String(item.close_approach_date))}</span>
            <div className={styles.boxInfo}>
              <span>
                Расстояние до Земли в км:{' '}
                {Math.round(Number(item.miss_distance.kilometers)).toLocaleString('ru-RU')}
              </span>
              <span>
                Расстояние до Земли в лунных орбитах: {Math.round(Number(item.miss_distance.lunar))}
              </span>
              <span>
                Скорость относительно Земли:{' '}
                {Math.round(Number(item.relative_velocity.kilometers_per_hour)).toLocaleString(
                  'ru-RU'
                )}{' '}
                км/ч
              </span>
              <span>Орбитальный объект: {item.orbiting_body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asteroid;
