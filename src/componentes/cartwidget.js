// CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const cartItemsCount = 5; // Hardcodeado, deberías obtener esto dinámicamente

    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span className="badge">{cartItemsCount}</span>
        </div>
    );
};

export default CartWidget;
