import React from 'react';

const CoinCard = ({coin}) => {
    return (
        <div>
            <h1>Coin Card</h1>
            <p>{coin.id}</p>
        </div>
    );
};

export default CoinCard;