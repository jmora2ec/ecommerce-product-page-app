import React, { createContext, useContext, useState } from 'react';
import Slides from '../components/slides/Slides';
import Counter from '../components/counter/Counter';
import AddToCart from '../components/buttons/addToCart/AddToCart';
import ProductItemContext from '../context/ProductItemContext';
import './product.scss';
import '../app.scss';

const Product = (props) => {
  const {
    id,
    images,
    thumbnails,
    name,
    price,
    regularPrice,
    discount,
    description,
  } = props.product;
  const [itemCart, setItemCart] = useState({
    productId: id,
    image: images[0],
    thumbnail: thumbnails[0],
    name: name,
    price: price,
    description: description,
    quantity: 0,
  });

  const [lightBoxActive, setLightBoxActive] = useState(false);

  function addItem() {
    setItemCart((prevState) => ({
      ...itemCart,
      quantity: prevState.quantity + 1,
    }));
  }

  function removeItem() {
    setItemCart((prevState) => {
      if (prevState.quantity === 0) {
        return { ...itemCart, quantity: 0 };
      }
      return { ...itemCart, quantity: (prevState.quantity -= 1) };
    });
  }

  function activeLightBox() {
    setLightBoxActive(true);
  }

  function closeLightBox() {
    setLightBoxActive(false);
  }

  return (
    <div className="product">
      <div className="slides">
        <Slides
          images={images}
          id={'mainSlide'}
          thumbnails={thumbnails}
          showButtons={true}
          onClick={activeLightBox}
        />
      </div>
      <div className={lightBoxActive ? 'lightBox active' : 'lightBox'}>
        <Slides
          images={images}
          id={'lightboxSlide'}
          thumbnails={thumbnails}
          showButtons={true}
          closeButtonHandle={closeLightBox}
        />
      </div>

      <div className="product__details">
        <div className="header">sneaker company</div>
        <h2 className="name">
          {name}
          <br /> sneakers
        </h2>
        <p className="description">{description}</p>
        <div className="product__price">
          <div className="current">
            <div className="total">${price}</div>
            <div className="discount">{discount}%</div>
          </div>
          <div className="regular">${regularPrice}</div>
        </div>
      </div>
      <div className="product__actions">
        <Counter
          quantity={itemCart.quantity}
          addItem={addItem}
          removeItem={removeItem}
        />
        <AddToCart
          onClick={() => {
            props.addToCart(itemCart);
          }}
        />
      </div>
    </div>
  );
};

export default Product;
