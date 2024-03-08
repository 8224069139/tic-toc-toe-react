import React, {useState} from "react";
import Square from "./Square";
const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isTurnX, setisTurnX] = useState(true);
    const [whichsTurn, setWhichsTurn] = useState('X');
    
    const handleOnClick = (index) => {
        let copyState = [...state];
        if(copyState[index] == null){
            copyState[index] = isTurnX ? "X" : "O";
            setWhichsTurn(copyState[index]);
            console.log(whichsTurn,"ddddddddddd")
            setState(copyState);
            setisTurnX(!isTurnX);
        }
    }

    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }
        return false;
    }

    const winnerBaba = checkWinner();

    const playAgain = ()=>{
        setState(Array(9).fill(null));
    }
    
    return (
        <div className="board-container" style={{width: "50%", margin: "50px 50px 50px 360px"}}>
            {winnerBaba ? <><span className="winner-message">{winnerBaba} is won the game.</span> <button onClick={()=>playAgain()}>Play Again</button></> : <></>}
            <p>Now the turn of {whichsTurn}</p>
            <div className="board-row">
                <Square onClick={()=>handleOnClick(0)} value = {state[0]}/>
                <Square onClick={()=>handleOnClick(1)} value = {state[1]}/>
                <Square value = {state[2]} onClick={()=>handleOnClick(2)}/>
            </div>
            <div className="board-row">
                <Square value = {state[3]} onClick={()=>handleOnClick(3)}/>
                <Square value = {state[4]} onClick={()=>handleOnClick(4)}/>
                <Square value = {state[5]} onClick={()=>handleOnClick(5)}/>
            </div>
            <div className="board-row">
                <Square value = {state[6]} onClick={()=>handleOnClick(6)}/>
                <Square value = {state[7]} onClick={()=>handleOnClick(7)}/>
                <Square value = {state[8]} onClick={()=>handleOnClick(8)}/>
            </div>
        </div>
    )
}

export default Board;