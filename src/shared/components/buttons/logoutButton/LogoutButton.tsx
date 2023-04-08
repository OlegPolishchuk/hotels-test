import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  ReactNode,
  MouseEvent,
} from 'react';

import styles from './LogoutButton.module.css';

import { LogoutIcon } from 'shared/components';

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
      <LogoutIcon />
    </button>
  );
};
