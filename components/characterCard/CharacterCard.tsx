import Image from "next/image";
import {CharacterType} from "assets/hooks/useCharacters";
import styles from "./CharacterCard.module.scss"

type PropsType = {
    character: CharacterType;
}

export const CharacterCards = (props: PropsType) => {
    const {character} = props;
    return (
        <div className={styles.card}>
            <div>{character.name}</div>
            <Image src={character.image} alt={`Picture of ${character.name}`} width={300} height={300}/>
        </div>
    )
}