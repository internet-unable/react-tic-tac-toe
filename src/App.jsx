import { useState } from "react";
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";

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

                <GameBoard onSquareClick={handleSquareClick} turns={gameTurns} />
            </div>

            <Log turns={gameTurns} />
        </main>
    )
}