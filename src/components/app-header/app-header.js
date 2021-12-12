import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const AppHeader = ({total}) => {
    return (
        <header className="header">
             
            <Link className="header__link" to="/">
                Menu
            </Link>

            <Link className="header__link" to="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

// export default AppHeader;
const mapStateToPros =({total})=>{
    return {
        total
    }
}


export default connect(mapStateToPros)( AppHeader);