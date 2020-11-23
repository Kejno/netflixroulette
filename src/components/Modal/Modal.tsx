import React from 'react';

import Portal from '../Portal/Portal';

import cls from './Modal.scss';

interface IModalProps {
  title?: string;
  isOpen: boolean;
  onClose: any;
  onSubmit: any;
  children: any;
  isEditModal?: boolean;
  buttonTitle: Array<string>;
}

const Modal: React.FC<IModalProps> = ({
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  isEditModal,
  buttonTitle,
}) => {
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
              <div className={cls.modalFooter}>
                <button className={cls.buttonCancel} onClick={onSubmit}>
                  {buttonTitle[0]}
                </button>
                {isEditModal && (
                  <button className={cls.buttonSubmit} onClick={onSubmit}>
                    {buttonTitle[1]}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
