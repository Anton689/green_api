import axios from 'axios';

import { SendType } from './apiTypes/sendType';

const URL = `https://api.green-api.com`;

export const chatAPI = {
  sendMessage: (instance: string | null, token: string | null, body: SendType) =>
    axios
      .post(`${URL}/waInstance${instance}/SendMessage/${token}`, body)
      .then(res => console.log('everthing is ok!'))
      .catch(error => console.log(error)),

  receiveMessage: (instance: string | null, token: string | null) =>
    axios
      .get(`${URL}/waInstance${instance}/receiveNotification/${token}`)
      .then(res => console.log('everthing is ok!'))
      .catch(error => console.log(error)),

  deleteMessage: (instance: string | null, token: string | null, receiptId: string) =>
    axios
      .delete(`${URL}/waInstance${instance}/deleteNotification/${token}/${receiptId}`)
      .then(res => console.log('everthing is ok!'))
      .catch(error => console.log(error)),
};
