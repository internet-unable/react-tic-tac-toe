export default function GameOver({ winner, onBtnClick }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p>It's a draw</p>}
            <p>
                <button type="button" onClick={onBtnClick}>Rematch</button>
            </p>
        </div>
    );
}