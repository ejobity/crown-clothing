import { Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.style.jsx";
import './navigation.style.jsx';

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);

    //const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={(signOutUser)}> SIGNOUT
                            </NavLink>)
                            : (<NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                            )
                    }
                    <CartIcon></CartIcon>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>

    );

};

export default Navigation;