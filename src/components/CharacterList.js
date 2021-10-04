import { Character } from "./Character";
import { useState } from "react";

export const CharacterList = (props) => {

    const [character, setCharacter] = useState([
        {
            id: 0,
            name: "Alex",
            race: "Human",
            class: "Fighter",
            attributes: {
                str: 10,
                dex: 10,
                con: 10,
                wis: 10,
                int: 10,
                cha: 10
            }
        },
        {
            id: 1,
            name: "Katie",
            race: "Human",
            class: "Barbarian",
            attributes: {
                str: 10,
                dex: 10,
                con: 10,
                wis: 10,
                int: 10,
                cha: 10
            }
        },
        {
            id: 2,
            name: "Matt",
            race: "Human",
            class: "Wizard",
            attributes: {
                str: 10,
                dex: 10,
                con: 10,
                wis: 10,
                int: 10,
                cha: 10
            }
        }
    ]);

    const handleDeleteChar = (id) => {
        setCharacter(() => character.filter(char => char.id !== id))
    }

    return (
        <div className={`d-flex flex-row flex-wrap justify-content-center pt-3 mb-5`}>
            {character.map((char) => <Character id={char.id} char={char} handleDeleteChar={handleDeleteChar} />)}
        </div>
    );
}