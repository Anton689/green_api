import React from 'react';

import s from './Messages.module.css';

import { ReturnComponentType } from 'types';

type MessagesProps = {
  messageText: string;
  messageType: 'send' | 'receive';
};

export const Messages = ({
  messageText,
  messageType,
}: MessagesProps): ReturnComponentType => (
  <div className={s.outgoingMessage}>{messageText}</div>
);
