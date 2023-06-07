import React, { FormEvent, useState } from 'react';

import { useSelector } from 'react-redux';

import s from './Login.module.css';

import { Input } from 'components';
import { useAppDispatch } from 'hooks';
import { selectIsAuthError } from 'store/selectors';
import { checkAuthData } from 'store/slices';
import { ReturnComponentType } from 'types';

export const Login = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const isAuthError = useSelector(selectIsAuthError);

  const [instanceValue, setInstanceValue] = useState<string>('1101821836');
  const [tokenValue, setTokenValue] = useState<string>(
    '28b9dfaa0bab46f1b8a136c6dc3ac21baa41cd4fc26a40979e',
  );
  const [error, setError] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (instanceValue.trim() !== '' && tokenValue.trim() !== '') {
      setError(false);
      dispatch(checkAuthData({ tokenValue, instanceValue }));
    } else {
      setError(true);
    }
  };

  return (
    <div className={s.container}>
      <form className={s.inner} onSubmit={onSubmit}>
        <h3 className={s.headerTitle}>Welcome!</h3>

        <div className={s.inputBlock}>
          <div>
            <Input
              value={instanceValue}
              placeholder="IdInstance"
              onChange={value => setInstanceValue(value)}
              onFocus={() => setError(false)}
            />
          </div>

          <div>
            <Input
              value={tokenValue}
              placeholder="ApiTokenInstance"
              onChange={value => setTokenValue(value)}
              onFocus={() => setError(false)}
            />
          </div>

          {error && <span className={s.error}>Fields cannot be empty</span>}
          {isAuthError && <span className={s.error}>Check authorization data</span>}
        </div>

        <button type="submit" className={s.startButton}>
          Start
        </button>
      </form>
    </div>
  );
};
