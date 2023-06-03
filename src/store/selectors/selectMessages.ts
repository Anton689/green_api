import { RootState } from 'store';
import { MessageTextType } from 'types';

export const selectMessages = (state: RootState): MessageTextType[] | [] =>
  state.chats.chatInfo[state.contacts.currentContact.phone] || [];
