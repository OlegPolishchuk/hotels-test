import React, {
  ChangeEvent,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from 'react';

import styles from './Input.module.css';

interface Props
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string;
  labelTitle?: string;
  className?: string;

  onChangeCallback?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      errorMessage,
      className,
      labelTitle,
      type,
      onChange,
      onChangeCallback,
      ...restProps
    },
    ref,
  ): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) {
        onChange(event);
      }

      if (onChangeCallback) {
        onChangeCallback(event.target.value);
      }
    };

    return (
      <div className={styles.wrapper}>
        <label>
          <span>{labelTitle}</span>
          <input
            className={className}
            onChange={handleChange}
            type={type}
            ref={ref}
            {...restProps}
          />
        </label>
        <span className={styles.input_error}>{errorMessage}</span>
      </div>
    );
  },
);
