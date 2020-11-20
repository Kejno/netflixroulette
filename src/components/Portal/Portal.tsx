import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type IPortal = {
  children: any;
};

const Portal = ({ children }: IPortal) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });
  return ReactDOM.createPortal(children, el);
};

export default Portal;
