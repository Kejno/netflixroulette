import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import {
  deleteMovie,
  movieDetails,
  updateMovie,
} from '../../actions/movieActions';
import ModalEditForm from '../ModalEditForm/ModalEditForm';

import cls from './MenuCardMovie.scss';

interface MenuCardMovieProps {
  onToggleMenuCard: any;
  id: number;
}

const MenuCardMovie: React.FC<MenuCardMovieProps> = ({
  onToggleMenuCard,
  id,
}) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const optionsList = useSelector((state: any) => state.settings);
  const searchParams = useSelector((state: any) => state.search);

  const dispatch = useDispatch();

  const deteleMovieItem = async () => {
    dispatch(deleteMovie(id, { ...optionsList, ...searchParams }));
    setIsModalDeleteOpen(false);
  };

  const onCloseDeleteModal = () => {
    onToggleMenuCard;
    setIsModalDeleteOpen(true);
  };

  const onCloseEditModal = () => {
    onToggleMenuCard;
    setIsModalEditOpen(true);
    dispatch(movieDetails(id));
  };

  return (
    <div className={cls.menuCardWrapper}>
      <Modal
        title="Delete movie"
        isOpen={isModalDeleteOpen}
        onClose={onToggleMenuCard}
        children={
          <div style={{ width: '200px', height: '150px' }}>
            <div style={{ color: '#ffffff' }}>
              You are sure you want to delete this movie?
            </div>
            <button onClick={deteleMovieItem}>confirn</button>
          </div>
        }
      />
      <Modal
        isEditModal={true}
        isOpen={isModalEditOpen}
        onClose={onToggleMenuCard}
        children={<ModalEditForm />}
      />
      <div className={cls.menuCardClose} onClick={onToggleMenuCard}></div>

      <div className={cls.menuCardItem} onClick={onCloseEditModal}>
        Edit
      </div>
      <div className={cls.menuCardItem} onClick={onCloseDeleteModal}>
        Detele
      </div>
    </div>
  );
};

export default MenuCardMovie;
