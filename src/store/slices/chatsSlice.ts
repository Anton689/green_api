import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { SendType, chatAPI } from 'api';
import { RootState } from 'store/store';
import { ChatInfoType } from 'types';
import { getRandomID } from 'utils';

type InitialStateType = {
  chatInfo: ChatInfoType;
};

const initialState: InitialStateType = {
  chatInfo: {},
};

export const sendMessage = createAsyncThunk(
  'chatSlice/msgSend',
  async (body: SendType, { getState, dispatch }) => {
    try {
      const { app } = getState() as RootState;

      // await chatAPI.sendMessage(app.idInstance, app.apiToken, body);
      dispatch(
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        addChatInfo({
          chatId: body.chatId,
          messageText: {
            id: getRandomID(),
            messageText: body.message,
            messageType: 'send',
          },
        }),
      );
      // return response;
    } catch (error: any) {
      console.error(error);
    }
  },
);

export const receiveMessage = createAsyncThunk(
  'chatSlice/msgReceive',
  async (_, { getState }) => {
    try {
      const { app } = getState() as RootState;
      const response = await chatAPI.receiveMessage(app.idInstance, app.apiToken);

      // don't delete message if the queue (messages) is empty
      if (response.data) {
        await chatAPI.deleteMessage(
          app.idInstance,
          app.apiToken,
          response?.data.receiptId,
        );
      }
    } catch (error: any) {
      console.error(error);
    }
  },
);

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChatInfo: (state, action) => {
      const { chatId, messageText } = action.payload;

      if (Array.isArray(state.chatInfo[chatId])) {
        state.chatInfo[chatId].push(messageText);
      } else {
        state.chatInfo[chatId] = [messageText];
      }
    },
  },
});

export const { addChatInfo } = chatsSlice.actions;
export const chatReducer = chatsSlice.reducer;
