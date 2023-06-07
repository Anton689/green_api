import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import s from './ChatWindow.module.css';

import { Messages } from 'components';
import { useAppDispatch } from 'hooks';
import { selectCurrentContact } from 'store/selectors';
import { selectMessages } from 'store/selectors/selectMessages';
import { receiveMessage, sendMessage } from 'store/slices';
import { ReturnComponentType } from 'types';

const ZERO = 0;

export const ChatWindow = (): ReturnComponentType => {
  console.log('render, ChatWindow');
  const dispatch = useAppDispatch();

  const messages = useSelector(selectMessages);
  const { id, name, phone } = useSelector(selectCurrentContact);

  const [value, setValue] = useState<string>('');

  const sendMessageHandler = (): void => {
    const body = {
      chatId: phone,
      message: value,
    };
    dispatch(sendMessage(body));
    setValue('');
  };

  const receiveMessageHandler = (): void => {
    dispatch(receiveMessage());
  };

  if (!id && !name) {
    return <div className={s.empty}>Add contact</div>;
  }

  return (
    <div className={s.container}>
      <div className={s.header}>{name}</div>

      <div className={s.messages}>
        {messages.length > ZERO &&
          messages.map(message => (
            <Messages
              key={message.id}
              messageText={message.messageText}
              messageType={message.messageType}
            />
          ))}
      </div>

      <div className={s.inputBlock}>
        <input
          type="text"
          value={value}
          placeholder="Type a message"
          onChange={(e: any) => setValue(e.target.value)}
        />

        <button type="button" onClick={sendMessageHandler} className={s.chatButton}>
          Send
        </button>

        <button type="button" onClick={receiveMessageHandler} className={s.chatButton}>
          Receive
        </button>
      </div>
    </div>
  );
};
