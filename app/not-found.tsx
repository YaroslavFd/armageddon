import Image from 'next/image';

import styles from './page.module.scss';

export const NotFound = () => (
  <div className={styles.statusWrapper}>
    <Image
      alt='not found page'
      className={styles.notFound}
      height={400}
      src='/404.svg'
      width={400}
    />
  </div>
);

export default NotFound;
