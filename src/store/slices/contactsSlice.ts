import { createSlice } from '@reduxjs/toolkit';

import { ContactType } from 'types';

type InitialStateType = {
  contacts: ContactType[];
  currentContact: ContactType;
};

const initialState: InitialStateType = {
  contacts: [],
  currentContact: {
    id: 0,
    name: '',
    phone: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
});

export const { addNewContact, setCurrentContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
