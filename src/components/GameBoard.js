import React, { useEffect } from 'react';
import GameCircle from './GameCircle';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { getComputerMove, isWinner } from '../helper';
import { isDraw } from '../helper';

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GAME_STATE_IDLE = 0;
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;

const GameBoard = () => {
    let style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px',
        aspectRatio: 1,
        margin: 'auto',
        placeItems: 'center'
    };
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    let [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);
    const initGame = () => {
        setCurrentPlayer(PLAYER_1);
        setGameBoard(Array(16).fill(0));
        setGameState(GAME_STATE_PLAYING);
    }
    useEffect(() => {
        initGame();
    }, []);
    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < 16; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }
    const suggestMove=()=>{
        circleClicked(getComputerMove(gameBoard));
    }
    const circleClicked = (id) => {
        if (gameBoard[id] !== NO_PLAYER)
            return;
        if (gameState !== GAME_STATE_PLAYING)
            return;
        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        else if (isDraw(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
        }
        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id)
                    return currentPlayer;
                return circle;
            })
        })
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
    const renderCircle = (id) => {
        return <GameCircle key={id} id={id} color={gameBoard[id] === 0 ? "light" : (gameBoard[id] === 1 ? "danger" : "primary")} handleCircle={circleClicked} />
    }
    return (
        <>
            <Header gameState={gameState} player={currentPlayer} winPlayer={winPlayer} />
            <div className='p-3' style={{ maxWidth: '500px', margin: 'auto', border: '5px solid rgb(226,186,143)', borderRadius: '20px', backgroundColor: '#f4e4ba', WebkitBoxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.9)', boxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.9)' }}>
                <div style={style}>
                    {initBoard()}
                </div>
            </div>
            <Footer handleClick={initGame} onSuggestClick={suggestMove} />
        </>
    )
}
export default GameBoard;