import { Button } from '../ui/Button';

import styles from './styles.module.scss';

export const Cart = () => (
  <div className={styles.wrapper}>
    <div>
      <h3>Корзина</h3>
      <span>2 астероида</span>
    </div>
    <Button text='Отправить' />
  </div>
);
