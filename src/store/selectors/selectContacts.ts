import { RootState } from 'store';
import { ContactType } from 'types';

export const selectContacts = (state: RootState): ContactType[] =>
  state.contacts.contacts;

export const selectCurrentContact = (state: RootState): ContactType =>
  state.contacts.currentContact;
