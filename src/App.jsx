import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";

export default function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initName="Player 1" symbol="X" />
                    <Player initName="Player 2" symbol="O" />
                </ol>

                <GameBoard />
            </div>
            Log
        </main>
    )
}