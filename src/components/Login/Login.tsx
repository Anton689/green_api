import React, { FormEvent, useState } from 'react';

import s from './Login.module.css';

import { useAppDispatch } from 'hooks';
import { setAuthData } from 'store/slices';
import { ReturnComponentType } from 'types';

export const Login = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [instanceValue, setInstanceValue] = useState('1101821836');
  const [tokenValue, setTokenValue] = useState(
    '28b9dfaa0bab46f1b8a136c6dc3ac21baa41cd4fc26a40979e',
  );
  const [error, setError] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (instanceValue.trim() !== '' && tokenValue.trim() !== '') {
      setError(false);
      dispatch(setAuthData({ tokenValue, instanceValue }));
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
            <input
              value={instanceValue}
              className={s.input}
              placeholder="IdInstance"
              onChange={e => setInstanceValue(e.target.value)}
              onFocus={() => setError(false)}
            />
          </div>

          <div>
            <input
              value={tokenValue}
              className={s.input2}
              placeholder="ApiTokenInstance"
              onChange={e => setTokenValue(e.target.value)}
              onFocus={() => setError(false)}
            />
          </div>

          {error && <span className={s.error}>Fields cannot be empty</span>}
        </div>

        <button type="submit" className={s.button}>
          Start
        </button>
      </form>
    </div>
  );
};
