import { Spinner } from '@/components/ui/Spinner';

import styles from './page.module.scss';

export const Loading = () => (
  <div className={styles.statusWrapper}>
    <Spinner />
  </div>
);

export default Loading;
