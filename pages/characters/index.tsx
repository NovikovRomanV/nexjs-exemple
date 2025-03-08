import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCards} from "@/components/characterCard/CharacterCard";
import {HeadMeta} from "@/components/headMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";
import Link from "next/link";


function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={"Characters"}/>
            {characters && characters.map((character) => (
                <Link key={character.id} href={`/characters/${character.id}`}>
                    <CharacterCards  character={character}/>
                </Link>
            ))}
        </>
    );
}

Characters.getLayout = getLayout
export default Characters

