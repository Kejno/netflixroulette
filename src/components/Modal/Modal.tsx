import React from 'react';

import Portal from '../Portal/Portal';

import cls from './Modal.scss';

interface IModalProps {
  title?: string;
  isOpen: boolean;
  onClose?: any;
  children: any;
  isEditModal?: boolean;
}

const Modal: React.FC<IModalProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className={cls.modalOverlay}>
            <div className={cls.modalWindow}>
              <div className={cls.modalHeader}>
                <div className={cls.modalTitle}>{title}</div>
                <div className={cls.modalClose} onClick={onClose}></div>
              </div>
              <div className={cls.modalBody}>{children}</div>
              <div className={cls.modalFooter}></div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
