import React from 'react';

function Square(props){

    return <div className={"TicTacToeGridBox "+props.class} id = {props.id} onClick={props.changeImage}>
        {props.symbol}
    </div>
}

export default Square;