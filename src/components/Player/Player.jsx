import { useState } from "react";

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleBtnClick() {
        setIsEditing((editing) => !editing);
    }

    let playerInput = <input type="text" value={name} required />;
    let playerSpan = <span className="player-name">{name}</span>;
    let playerContent = isEditing ? playerInput: playerSpan;
    let btnCaption = isEditing ? 'Save' : 'Edit';

    return (
        <li>
            <span className="player">
                {playerContent}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button type="button" onClick={handleBtnClick}>{btnCaption}</button>
        </li>
    );
}