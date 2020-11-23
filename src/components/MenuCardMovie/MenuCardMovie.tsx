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
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);

  const dispatch = useDispatch();

  const deteleMovieItem = async () => {
    dispatch(deleteMovie(id));
    setIsModalDeleteOpen(false);
  };

  const updateMovieHandle = async () => {
    // https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg
    //dispatch(updateMovie(newMovie));
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
        buttonTitle={['confirm']}
        title="Delete movie"
        isOpen={isModalDeleteOpen}
        onClose={onToggleMenuCard}
        onSubmit={deteleMovieItem}
        children={<div>You are sure you want to delete this movie?</div>}
      />
      <Modal
        buttonTitle={['reset', 'save']}
        isEditModal={true}
        isOpen={isModalEditOpen}
        onClose={onToggleMenuCard}
        onSubmit={updateMovieHandle}
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
