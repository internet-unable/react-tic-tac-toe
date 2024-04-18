import { useState } from "react";
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";

export default function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSquareClick() {
        setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>

                <GameBoard onSquareClick={handleSquareClick} activePlayerSymbol={activePlayer} />
            </div>
            Log
        </main>
    )
}