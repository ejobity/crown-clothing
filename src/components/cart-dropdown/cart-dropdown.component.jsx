import CartItem from '../cart-item/cart-item.component';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                <CartItem></CartItem>
                <Button>Checkout</Button>
            </div>
        </div>
    );
};

export default CartDropdown;