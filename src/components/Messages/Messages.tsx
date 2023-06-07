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
}: MessagesProps): ReturnComponentType => {
  console.log('render, Messages');
  return (
    <div className={messageType === 'send' ? s.outgoingMessage : s.incomingMessage}>
      {messageText}
    </div>
  );
};
