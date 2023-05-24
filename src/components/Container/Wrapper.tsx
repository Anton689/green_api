import { ReactNode } from 'react';

import s from './Wrapper.module.css';

import { ReturnComponentType } from 'types';

type Props = {
  children: ReactNode;
};

export const Wrapper = ({ children }: Props): ReturnComponentType => (
  <div className={s.wrapper}>{children}</div>
);
