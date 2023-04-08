import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  memo,
  MouseEvent,
  ReactElement,
} from 'react';

import styles from './LikeButton.module.css';

import { LikeIcon } from 'shared/components';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLike: boolean;
}
export const LikeButton = memo(
  ({ isLike = false, onClick, disabled, ...restProps }: Props): ReactElement => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
      onClick && onClick(event);
    };

    const activeClassName = isLike ? styles.active : '';
    const finalClassName = `${styles.button__like__img} ${activeClassName}`;

    return (
      <button type="button" onClick={handleClick} disabled={disabled} {...restProps}>
        <LikeIcon className={finalClassName} />
      </button>
    );
  },
);
