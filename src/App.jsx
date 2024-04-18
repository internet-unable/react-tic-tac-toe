import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initGameBoard;
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        
        gameBoard[row][col] = player;
    }
    
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = firstSquareSymbol;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSquareClick(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTruns = [
                { player: currentPlayer, square: { row: rowIndex, col: colIndex } },
                ...prevTurns
            ];

            return updatedTruns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>

                {(winner || hasDraw) && <GameOver winner={winner} />}
                <GameBoard onSquareClick={handleSquareClick} board={gameBoard} />
            </div>

            <Log turns={gameTurns} />
        </main>
    )
}