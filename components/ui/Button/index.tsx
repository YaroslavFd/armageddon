import cn from 'classnames';

import styles from './styles.module.scss';

interface IButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  text: string;
  appearance?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  type = 'button',
  text = 'Кнопка',
  className = '',
  appearance = 'accent',
  onClick,
  disabled = false
}) => {
  const buttonClassNames = cn(styles.button, className, disabled ? styles.disabled : '', {
    [styles.accent]: appearance === 'accent',
    [styles.accentDull]: appearance === 'accent-dull'
  });

  return (
    <button className={buttonClassNames} disabled={disabled} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
