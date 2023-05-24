/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import s from './Modal.module.css';

import { ReturnComponentType } from 'types';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, phone: string) => void;
};

export const Modal = ({ isOpen, onClose, onSubmit }: ModalProps): ReturnComponentType => {
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const handleSubmit = (): void => {
    if (nameValue.trim() !== '' || phoneValue.trim() !== '') {
      onSubmit(nameValue, phoneValue);
    }
  };

  const handleClose = (): void => {
    setNameValue('');
    setPhoneValue('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <input
          placeholder="name"
          type="text"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
        <input
          placeholder="phone"
          type="text"
          value={phoneValue}
          onChange={e => setPhoneValue(e.target.value)}
        />

        <button className={s.closeButton} onClick={handleSubmit}>
          OK!
        </button>
        <button className={s.closeButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
