import React from 'react';
import MediaItem from './MediaItem';

const MediaList = ({mediaItems, addToCart, removeFromCart, toggleFavorite}) => {
    return (
        <>
            {mediaItems.map(item => (
                <MediaItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>
            ))}
        </>
    )

};

export default MediaList;