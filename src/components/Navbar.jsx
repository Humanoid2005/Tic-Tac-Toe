import React from 'react';

function Navbar(props){

    const [hover1,sethover1] = React.useState(false);
    const [hover2,sethover2] = React.useState(false);

    function MouseOver1(){
        sethover1(true);
        console.log("in");
    }
    function MouseOut1(){
        sethover1(false);
        console.log("out");
    }

    function MouseOver2(){
        sethover2(true);
        console.log("in");
    }
    function MouseOut2(){
        sethover2(false);
        console.log("out");
    }

    return <div>
        <div className='NavigationBar' >
            <div>
                <img className="TicTacToeImage"  src = "/tictactoe-img.png" onMouseOver={MouseOver1} onMouseOut={MouseOut1}/>
            </div>
            <div className="Player">
                <div className="Player1">
                    <h2 className="Player1Name">{props.player1}</h2>
                    <h3 className="Player1Score">{props.player1score}</h3>
                </div>
                <div className="Player2">
                    <h2 className="Player2Name">{props.player2}</h2>
                    <h3 className="Player2Score">{props.player2score}</h3>
                </div>
            </div>
            <button className="RestartButton" onClick={props.restart} onMouseOver={MouseOver2} onMouseOut={MouseOut2}>Restart</button>
        </div>
        <div className='belowNavBar'>
            <div className='WelcomeToTicTacToeText' style={{visibility:!hover1?"hidden":null}} >Welcome to TicTacToe!!</div>
            <div className='PlayersTurn'>{props.player}'s Turn</div>
            <div className='WantToRestartText' style={{visibility:!hover2?"hidden":null}} >Want to restart the game ?</div>
        </div>
    </div>
}

export default Navbar;