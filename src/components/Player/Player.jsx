import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
    const [ playerName, setPlayerName ] = useState(initName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleBtnClick() {
        setIsEditing((editing) => !editing);
    }

    function handleInputChange(event) {
        setPlayerName(event.target.value);
    }

    let playerInput = <input type="text" defaultValue={playerName} onChange={handleInputChange} required />;
    let playerSpan = <span className="player-name">{playerName}</span>;
    let playerContent = isEditing ? playerInput: playerSpan;
    let btnCaption = isEditing ? 'Save' : 'Edit';

    return (
        <li className={isActive ? 'active' : null}>
            <span className="player">
                {playerContent}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button type="button" onClick={handleBtnClick}>{btnCaption}</button>
        </li>
    );
}