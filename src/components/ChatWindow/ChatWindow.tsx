import React from 'react';

import { useSelector } from 'react-redux';

import s from './ChatWindow.module.css';

import { chatAPI } from 'api';
import { useAppDispatch } from 'hooks';
import { selectCurrentContact, selectInstance, selectToken } from 'store/selectors';
import { sendMessage } from 'store/slices';
import { ReturnComponentType } from 'types';

export const ChatWindow = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const token = useSelector(selectToken);
  const instance = useSelector(selectInstance);
  const { id, name, phone } = useSelector(selectCurrentContact);

  const mesSend = (): void => {
    const body = {
      chatId: phone,
      message: 'test',
    };
    dispatch(sendMessage(body));
  };

  const receiveMessage = (): void => {
    chatAPI.receiveMessage(instance, token);
    // chatAPI.deleteMessage(instance, token);
  };

  return (
    <div className={s.container}>
      <div className={s.header}>{name}</div>

      <div className={s.messages}>message</div>
      <button type="button" onClick={mesSend}>
        send
      </button>

      <button type="button" onClick={receiveMessage}>
        reciev
      </button>

      <div className={s.inputBlock}>
        <input type="text" />
      </div>
    </div>
  );
};
