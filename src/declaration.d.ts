declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module 'react-router-dom';
declare module 'react-redux';

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
