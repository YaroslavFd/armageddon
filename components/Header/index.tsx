import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => (
  <div className={styles.wrapper}>
    <Link href='/'>ARMAGEDDON 2023</Link>
    <p>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
  </div>
);
