import { AsteroidsList } from '@/components/AsteroidsList';
import { Cart } from '@/components/Cart';

import styles from './page.module.scss';

export const Home = () => (
  <div className={styles.wrapper}>
    <div className={styles.cartBox}>
      <Cart />
    </div>
    <AsteroidsList />
  </div>
);

export default Home;
