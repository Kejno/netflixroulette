import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { getMovies, deleteMovie } from '../../actions/movieActions';

import cls from './MenuCardMovie.scss';

interface MenuCardMovieProps {
  onToggleMenuCard: any;
  id: number;
}

const MenuCardMovie: React.FC<MenuCardMovieProps> = ({
  onToggleMenuCard,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const optionsList = useSelector((state: any) => state.settings);
  const searchParams = useSelector((state: any) => state.search);

  const deteleMovieItem = async () => {
    console.log('submit');
    dispatch(deleteMovie(id));
    // await axios.delete(`http://localhost:4000/movies/${id}`);
    //dispatch(getMovies({ ...optionsList, ...searchParams }));
    setIsModalOpen(false);
  };

  const onToggleModal = () => {
    onToggleMenuCard;
    setIsModalOpen(true);
  };

  return (
    <div className={cls.menuCardWrapper}>
      <Modal
        title="Delete movie"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={deteleMovieItem}
        children={<div>You are sure you want to delete this movie?</div>}
      />
      <div className={cls.menuCardClose} onClick={onToggleMenuCard}></div>
      <div className={cls.menuCardItem}>Edit</div>
      <div className={cls.menuCardItem} onClick={onToggleModal}>
        Detele
      </div>
    </div>
  );
};

export default MenuCardMovie;
