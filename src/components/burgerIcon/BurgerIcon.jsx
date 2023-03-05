import React, { useState } from 'react';
import './burgerIcon.scss';
import '../../app.scss';

const BurgerIcon = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    props.onClick();
  };

  return (
    <button
      className={isOpen ? 'burger-button open' : 'burger-button'}
      onClick={handleClick}
    >
      <svg
        className="lines"
        viewBox="0 0 100 100"
        width={props.size}
        height={props.size}
      >
        <rect
          className="line top"
          width={props.barSize}
          height={props.barThick}
          x="15"
          y="30"
          rx={props.barRadius}
        ></rect>
        <rect
          className="line middle"
          width={props.barSize}
          height={props.barThick}
          x="15"
          y="55"
          rx={props.barRadius}
        ></rect>
        <rect
          className="line bottom"
          width={props.barSize}
          height={props.barThick}
          x="15"
          y="80"
          rx={props.barRadius}
        ></rect>
      </svg>
    </button>
  );
};

export default BurgerIcon;
