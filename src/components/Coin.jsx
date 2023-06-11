import React from "react";

function Coin(props){
    return (
        <div className='coin-row'>
            <p>{props.coin.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coin.image} alt='' />
                <p>{props.coin.symbol.toUpperCase()}</p>
            </div>
            <p>INR {props.coin.current_price.toLocaleString()}</p>
            <p>{props.coin.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
    )
}

export default Coin;