/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import s from './Modal.module.css';

import { Input } from 'components';
import { ReturnComponentType } from 'types';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, phone: string) => void;
};

export const Modal = React.memo(
  ({ isOpen, onClose, onSubmit }: ModalProps): ReturnComponentType => {
    const [nameValue, setNameValue] = useState<string>('');
    const [phoneValue, setPhoneValue] = useState<string>('');

    const handleClose = (): void => {
      setNameValue('');
      setPhoneValue('');
      onClose();
    };

    const handleSubmit = (): void => {
      if (nameValue.trim() !== '' || phoneValue.trim() !== '') {
        onSubmit(nameValue, phoneValue);
        handleClose();
      }
    };

    const phoneValidation = (value: string): void => {
      const validatedValue = value.replace(/\D/g, '').replace(/^8/, '7');
      setPhoneValue(validatedValue);
    };

    if (!isOpen) {
      return null;
    }

    return (
      <div className={s.modal}>
        <div className={s.modalContent}>
          <Input
            value={nameValue}
            placeholder="name"
            onChange={value => setNameValue(value)}
          />
          <Input
            value={phoneValue}
            placeholder="phone: 7XXXXXXXXXX"
            onChange={value => phoneValidation(value)}
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
  },
);
