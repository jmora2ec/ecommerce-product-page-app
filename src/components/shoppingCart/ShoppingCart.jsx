import './shoppingCart.scss';
import '../../app.scss';

const ShoppingCart = ({ showCart, items, totalItems }) => {
  let content = '';
  let checkoutButton = '';
  if (totalItems > 0) {
    checkoutButton = <button className="btn-checkout">Checkout</button>;
    content = (
      <div className="items">
        {items.map((item, key) => (
          <div className="cartItem" key={key}>
            <img src={item.thumbnail} alt="" className="cartItem__image" />
            <div className="cartItem__detail">
              <h3 className="item-name">{item.name}</h3>
              <div>
                <span className="item-price">${item.price}</span>
                <span className="item-quantity">x {item.quantity}</span>
                <span className="item-total">
                  {(item.price * item.quantity).toLocaleString('en-US', {
                    valute: 'USD',
                    style: 'currency',
                    currency: 'USD',
                    maximunFranctionDigits: 2,
                  })}
                </span>
              </div>
            </div>
            <button className="item-delete">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                  fill="#b6bcc8"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    content = <div className="items empty">Your cart is empty.</div>;
  }

  return (
    <div className={showCart ? 'shoppingCart active' : 'shoppingCart'}>
      <div className="header">Cart</div>
      <div className="content">{content}</div>
      {checkoutButton}
    </div>
  );
};

export default ShoppingCart;
