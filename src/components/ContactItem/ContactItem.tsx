import React from 'react';

import s from './ContactItem.module.css';

import { ReturnComponentType } from 'types';

type ContactItemType = {
  name: string;
};

export const ContactItem = React.memo(
  ({ name }: ContactItemType): ReturnComponentType => (
    <div className={s.container}>
      <div className={s.avatar} />
      <span className={s.contactName}>{name}</span>
    </div>
  ),
);
