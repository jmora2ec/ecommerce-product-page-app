import { useState } from 'react';
import '../../app.scss';
import './menu.scss';

function Menu(props) {
  return (
    <div className={props.active ? 'menu active' : 'menu'}>
      <ul className="menu__options">
        <li className="menu-item">
          <a href="">collections</a>
        </li>
        <li className="menu-item">
          <a href="">men</a>
        </li>
        <li className="menu-item">
          <a href="">women</a>
        </li>
        <li className="menu-item">
          <a href="">about</a>
        </li>
        <li className="menu-item">
          <a href="">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
