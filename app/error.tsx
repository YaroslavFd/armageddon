'use client';

import Image from 'next/image';

import styles from './page.module.scss';

export const Error = () => (
  <div className={styles.statusWrapper}>
    <h2>Упс! Кажется что-то пошло не&nbsp;так</h2>
    <Image alt='warning' height={100} src='/warning.png' width={100} />
  </div>
);

export default Error;
