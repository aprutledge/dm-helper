import { Character } from "./Character";

const charList = [
    {
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
];

export const CharacterList = (props) => {
    return (
        <div className={`d-flex flex-row flex-wrap justify-content-center shadow-sm p-3 mb-5 rounded`}>
            {charList.map((char, index) => <Character id={index} char={char} />)}
        </div>
    );
}