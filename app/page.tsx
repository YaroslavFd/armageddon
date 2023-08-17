import React from 'react';

import { AsteroidsList } from '@/components/AsteroidsList';
import { Cart } from '@/components/Cart';
import { fetchAsteroids } from '@/utils/api';

import styles from './page.module.scss';

export const Home = async () => {
  const asteroids = await fetchAsteroids();

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartBox}>
        <Cart />
      </div>
      {asteroids ? (
        <AsteroidsList asteroids={asteroids.near_earth_objects} />
      ) : (
        <h3>Что-то пошло не так :/</h3>
      )}
    </div>
  );
};

export default Home;
