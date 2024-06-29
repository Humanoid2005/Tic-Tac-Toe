import React, { useState } from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";
import PlayerNames from "./PlayerNames"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [turn,setturn] = React.useState(0);
    const [marked,setmarked] = React.useState([[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]);
    const [playernames,setplayernames] = React.useState({player1name:"",player2name:""});
    const [playerscores,setplayerscores] = React.useState([0,0]);
    const [player,setplayer] = React.useState("");
    const [startfirst,setstartfirst] = React.useState(false);

    function Restart(){
        var boxes = document.querySelectorAll(".gridbox");
        for(var i=0;i<boxes.length;i++){
            boxes[i].innerHTML = "";
        }
        for(var i=0;i<marked.length;i++){
            for(var j=0;j<marked[i].length;j++){
                marked[i][j] = -1;
            }
        }
        if(startfirst==true){
            setplayer("⭕ "+playernames.player1name);
        }
        else if(startfirst==false){
            setplayer("❌ "+playernames.player2name);
        }
        setturn(0);
    }

    function CheckWon(){
        if((marked[0][0]==1 && marked[0][1]==1 && marked[0][2]==1)||(marked[1][0]==1 && marked[1][1]==1 && marked[1][2]==1)||(marked[2][0]==1 && marked[2][1]==1 && marked[2][2]==1)||(marked[0][0]==1 && marked[1][0]==1 && marked[2][0]==1)||(marked[0][1]==1 && marked[1][1]==1 && marked[2][1]==1)||(marked[0][2]==1 && marked[1][2]==1 && marked[2][2]==1)||(marked[0][0]==1 && marked[1][1]==1 && marked[2][2]==1)||(marked[2][0]==1 && marked[1][1]==1 && marked[0][2]==1)){
            playerscores[1]++;
            setplayerscores(playerscores);
            toast.success( `${playernames.player2name} has won the game!! 🥳🎊🎉`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                Bounce: true,
            });
            setstartfirst(!startfirst);
            Restart()
        }
        else if((marked[0][0]==0 && marked[0][1]==0 && marked[0][2]==0)||(marked[1][0]==0 && marked[1][1]==0 && marked[1][2]==0)||(marked[2][0]==0 && marked[2][1]==0 && marked[2][2]==0)||(marked[0][0]==0 && marked[1][0]==0 && marked[2][0]==0)||(marked[0][1]==0 && marked[1][1]==0 && marked[2][1]==0)||(marked[0][2]==0 && marked[1][2]==0 && marked[2][2]==0)||(marked[0][0]==0 && marked[1][1]==0 && marked[2][2]==0)||(marked[2][0]==0 && marked[1][1]==0 && marked[0][2]==0)){
            playerscores[0]++;
            setplayerscores(playerscores);
            toast.success( `${playernames.player1name} has won the game!! 🥳🎊🎉`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                Bounce: true,
            });
            setstartfirst(!startfirst);
            Restart();
        }
        var count_minus_ones = 0;
        for(var i=0;i<marked.length;i++){
            for(var j=0;j<marked[i].length;j++)
                if(marked[i][j]==-1){
                    count_minus_ones += 1;
                }
        }
        if(count_minus_ones==0){
            toast.warn("It's a draw!!! ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                Bounce: true,
            });
            setstartfirst(!startfirst);
            Restart();
        }
        count_minus_ones = 0;
    }

    function changeSymbol(key){
        var box  = document.querySelector(`#t${key.id}o`);
        if(box.innerHTML==""){
            if(turn%2==0){
                setplayer("❌ "+playernames.player2name);
                box.innerHTML = "⭕";
            }
            else{
                setplayer("⭕ "+playernames.player1name)
                box.innerHTML = "❌";
            }
            marked[Math.floor(key.id/3)][key.id%3] = (turn%2);
            setmarked(marked);
            setturn(turn+1);
            CheckWon()
        }
    }

    function GetPlayerNames(player1,player2){
        setplayernames({player1name:player1,player2name:player2});
        setplayer("⭕ "+player1);
    }

    return <div>
        <PlayerNames GetNames = {GetPlayerNames}/>
        <Navbar player = {player} player1={playernames.player1name} player2 = {playernames.player2name} player1score = {playerscores[0]} player2score = {playerscores[1]} restart={()=>{location.reload()}}/>
        <Grid changeSymbol={changeSymbol}/>
        <ToastContainer />
    </div>;
}

export default App;
