import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import './app.scss';
import image1 from './assets/images/image-product-1.jpg';
import image2 from './assets/images/image-product-2.jpg';
import image3 from './assets/images/image-product-3.jpg';
import image4 from './assets/images/image-product-4.jpg';
import thumbnail1 from './assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from './assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from './assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from './assets/images/image-product-4-thumbnail.jpg';
import Product from './pages/Product';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import ProductItemContext from './context/ProductItemContext';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const product = {
    id: 'product_001',
    images: [image1, image2, image3, image4],
    thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
    name: 'Fall Limited Edition',
    price: '125.00',
    regularPrice: '250.00',
    discount: 50,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everythingthe weather can offer.",
  };

  function showShoppingCart() {
    setShowCart((prevState) => !prevState);
  }

  function addToCart(item) {
    const itemFound = items.find((element) => element.id === item.id);

    if (itemFound) {
      setItems((prevState) => {
        const newState = [...prevState];
        newState[newState.indexOf(itemFound)].quantity = item.quantity;
        return newState;
      });
    } else {
      setItems((prevState) => {
        const newState = [...prevState];
        newState.push(item);
        return newState;
      });
    }
  }
  const totalItems = items.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <div className="app">
      <Navbar showCartHandle={showShoppingCart} totalItems={totalItems} />
      <ShoppingCart showCart={showCart} items={items} totalItems={totalItems} />
      <Product
        product={product}
        addToCart={addToCart}
        showCartHandle={showShoppingCart}
      />
    </div>
  );
}

export default App;
