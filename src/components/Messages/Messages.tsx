import React from 'react';

import s from './Messages.module.css';

import { ReturnComponentType } from 'types';

type MessagesProps = {
  messageText: string;
  messageType: 'send' | 'receive';
};

export const Messages = React.memo(
  ({ messageText, messageType }: MessagesProps): ReturnComponentType => (
    <div className={messageType === 'send' ? s.outgoingMessage : s.incomingMessage}>
      {messageText}
    </div>
  ),
);
