import React from 'react';

const MediaItem = ({item, addToCart, removeFromCart, toggleFavorite}) =>{
    return(
        <>
        <h3>{item.title}</h3>
        <p>Media Type: {item.type}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
        <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
        <button onClick={() => toggleFavorite(item)}>{item.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
        </>
    )
};

export default MediaItem;