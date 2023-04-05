import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  ReactNode,
  MouseEvent,
} from 'react';

import styles from './LogoutButton.module.css';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  callback?: () => void;
  children?: ReactNode;
}

export const LogoutButton = ({
  children,
  callback,
  onClick,
  ...restProps
}: Props): ReactElement => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (onClick) {
      onClick(event);
    }

    if (callback) {
      callback();
    }
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick} {...restProps}>
      <span>{children}</span>
      <svg
        className={styles.icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17L21 12L16 7"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12H9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
