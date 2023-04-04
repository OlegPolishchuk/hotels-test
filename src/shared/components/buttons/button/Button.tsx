import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  MouseEvent,
  ReactNode,
} from 'react';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactElement | ReactNode;
  callback?: () => void;
}
export const Button = ({
  children,
  callback,
  disabled,
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
    <button
      className="button"
      onClick={handleClick}
      disabled={disabled}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
