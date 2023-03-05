import './counter.scss';
import { useContext, useState } from 'react';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';
import ProductItemContext from '../../context/ProductItemContext';

const Counter = (props) => {
  //const [count, setCount] = useState(0);

  // function addItem() {
  //   setCount((prevCount) => (prevCount += 1));
  // }

  // function removeItem() {
  //   setCount((prevCount) => {
  //     if (prevCount === 0) {
  //       return 0;
  //     }
  //     return (prevCount -= 1);
  //   });
  // }

  return (
    <div className="counter">
      <div className="counter__remove" onClick={props.removeItem}>
        <img src={iconMinus} alt="" />
      </div>
      <div className="counter__value">{props.quantity}</div>
      <div className="counter__add" onClick={props.addItem}>
        <img src={iconPlus} alt="" />
      </div>
    </div>
  );
};

export default Counter;
