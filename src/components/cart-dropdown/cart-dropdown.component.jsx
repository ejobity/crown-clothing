
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

import { selectCartItems } from '../../store/cart/cart.selector';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO CHECKOUT</Button>
        </CartDropDownContainer>
    );
};

export default CartDropdown;
