import { useState } from "react";
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";

export default function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSquareClick(rowIndex, colIndex) {
        setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
        setGameTurns((prevTurns) => {
            let currentPlayer = 'X';

            if (prevTurns.length && prevTurns[0].player === 'X') {
                currentPlayer = 'O';
            }

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
            Log
        </main>
    )
}