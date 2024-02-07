// ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <p>{greeting}</p>
            {/* Agrega más contenido según sea necesario */}
        </div>
    );
};

export default ItemListContainer;
