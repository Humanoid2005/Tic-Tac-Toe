import React from "react";
import Square from "./Square";

function Grid(props){
    const array = [1,2,3,4,5,6,7,8,9];

    return <div className="TicTacToeGrid">
        {array.map((number,id)=>{return <Square key = {id} id = {"t"+id+"o"} class="gridbox" changeImage={()=>{props.changeSymbol({id})}} symbol = ""/>})}
    </div>
}

export default Grid;