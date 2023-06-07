/* eslint-disable react/require-default-props */
import React from 'react';

import s from './Input.module.css';

import { ReturnComponentType } from 'types';

type inputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
};

export const Input = React.memo(
  ({ value, placeholder, onChange, onFocus }: inputProps): ReturnComponentType => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.value);
    };

    return (
      <input
        value={value}
        placeholder={placeholder}
        className={s.input}
        onChange={onChangeHandler}
        onFocus={onFocus}
      />
    );
  },
);
