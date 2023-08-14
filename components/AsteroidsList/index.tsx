import { Card } from './Card';
import styles from './styles.module.scss';

export const AsteroidsList = () => (
  <div className={styles.wrapper}>
    <div>
      <h2>Ближайшие подлёты астероидов</h2>
      <p className={styles.smallInfo}>
        в километрах | <span>в лунных орбитах</span>
      </p>
    </div>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
