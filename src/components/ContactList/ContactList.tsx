/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import s from './ContactList.module.css';

import { ContactItem, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { selectContacts } from 'store/selectors';
import { addNewContact, setCurrentContact } from 'store/slices';
import { logOut } from 'store/slices/appSlice';
import { ContactType, ReturnComponentType } from 'types';

export const ContactList = (): ReturnComponentType => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const contacts = useSelector(selectContacts);

  const handleOpenModal = (): void => {
    setModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalOpen(false);
  };

  const handleLogOut = (): void => {
    dispatch(logOut());
  };

  const handleAddContact = (name: string, phone: string): void => {
    const payload = {
      id: Math.round(Math.random() * 100),
      name,
      phone: `${phone}@c.us`,
    };
    dispatch(addNewContact(payload));
    handleCloseModal();
  };

  const pickCurrentContact = (contact: ContactType): void => {
    dispatch(setCurrentContact(contact));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.avatar} />

        <div className={s.logOut} onClick={handleLogOut}>
          Log out
        </div>
      </div>

      <div className={s.actionBlock}>
        <div className={s.contactButton} onClick={handleOpenModal}>
          +
        </div>
      </div>

      <div className={s.contactsList}>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <div key={contact.id} onClick={() => pickCurrentContact(contact)}>
              <ContactItem name={contact.name} />
            </div>
          ))}
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal} onSubmit={handleAddContact} />
    </div>
  );
};
