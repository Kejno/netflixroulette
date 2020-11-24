import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalCreateForm from '../../ModalCreateForm/ModalCreateForm';
import { createMovie } from '../../actions/movieActions';

import cls from './Header.scss';

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModalHandler = () => {
    console.log('sfsdfsfsfsdfsfsdfsf');
    setIsOpenModal(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        children={<ModalCreateForm closeModalHandler={closeModalHandler} />}
        onClose={() => setIsOpenModal(false)}
      />
      <div className={cls.Container}>
        <div className={cls.title}>
          <span className={cls.netflix}>netflix</span>
          <span>roulette</span>
        </div>
        <button className={cls.addMovie} onClick={() => setIsOpenModal(true)}>
          + Add Movie
        </button>
      </div>
    </>
  );
};

export default Header;
