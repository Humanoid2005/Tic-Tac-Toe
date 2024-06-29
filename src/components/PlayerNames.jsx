import React from "react";

function PlayerNames(props){

    const [playernames,setPlayerNames] = React.useState({player1:"",player2:""});
    const [isOpen,setisOpen] = React.useState(true);

    function changeNames(event){
        const {name,value} = event.target;
        setPlayerNames(prevName=>{
            return {...prevName,[name]:value};
        })
    }

    function SubmitNames(event){
        event.preventDefault();
        setisOpen(false);
    }

    return isOpen?(<div className="PlayerInfo">
        <form className="PlayerInfoFlex">
            <label className="Player1Label">Player 1 Name 🔘</label>
            <input className = "Player1Info" type="text" name="player1" value={playernames.player1} onChange={changeNames}/>
            <label className="Player2Label">Player 2 Name  ✖</label>
            <input className= "Player2Info" type="text" name="player2" value={playernames.player2} onChange={changeNames}/>
            <button className= "PlayerInfoSubmit" type="submit" onClick={(event)=>{SubmitNames(event);props.GetNames(playernames.player1,playernames.player2)}}>Submit</button>
        </form>
    </div>):(<div style={{visibility:"hidden"}}>
        <input className= "Player1Info hidden1" type="hidden" name="Player1Name" value={playernames.player1}></input>
        <input className= "Player2Info hidden2" type="hidden" name="Player2Name" value={playernames.player2}></input>
        </div>)
}

export default PlayerNames;