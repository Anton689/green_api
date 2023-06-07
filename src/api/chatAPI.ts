import axios from 'axios';

import { ReceiveMessageResponseType, SendType } from './apiTypes/sendType';

import { Nullable } from 'types';

const URL = `https://api.green-api.com`;

export const chatAPI = {
  checkAuth: (instance: Nullable<string>, token: Nullable<string>) =>
    axios.get(`${URL}/waInstance${instance}/getStateInstance/${token}`),

  sendMessage: (instance: Nullable<string>, token: Nullable<string>, body: SendType) =>
    axios.post(`${URL}/waInstance${instance}/SendMessage/${token}`, body),

  receiveMessage: (instance: Nullable<string>, token: Nullable<string>) =>
    axios.get<ReceiveMessageResponseType>(
      `${URL}/waInstance${instance}/receiveNotification/${token}`,
    ),

  deleteMessage: (
    instance: Nullable<string>,
    token: Nullable<string>,
    receiptId: number,
  ) =>
    axios.delete(`${URL}/waInstance${instance}/deleteNotification/${token}/${receiptId}`),
};
