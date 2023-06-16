/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';

import { useSelector } from 'react-redux';

import s from './ContactList.module.css';

import { ContactItem, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { selectContacts } from 'store/selectors';
import { addNewContact, setCurrentContact } from 'store/slices';
import { logOut } from 'store/slices/appSlice';
import { ContactType, ReturnComponentType } from 'types';
import { getRandomID } from 'utils';

export const ContactList = (): ReturnComponentType => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const contacts = useSelector(selectContacts);

  const handleOpenModal = useCallback((): void => {
    setModalOpen(true);
  }, [setModalOpen]);

  const handleCloseModal = useCallback((): void => {
    setModalOpen(false);
  }, [setModalOpen]);

  const handleLogOut = useCallback((): void => {
    dispatch(logOut());
  }, [dispatch]);

  const pickCurrentContact = useCallback(
    (contact: ContactType): void => {
      dispatch(setCurrentContact(contact));
    },
    [dispatch],
  );

  const handleAddContact = (name: string, phone: string): void => {
    const payload = {
      id: getRandomID(),
      name,
      phone: `${phone}@c.us`,
    };
    dispatch(addNewContact(payload));
    pickCurrentContact(payload);
    handleCloseModal();
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
