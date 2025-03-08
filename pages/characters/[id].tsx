import {useCharacter} from "@/assets/hooks/useCharacter";
import {CharacterCards} from "@/components/characterCard/CharacterCard";
import {HeadMeta} from "@/components/headMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";


function Character() {

    const character = useCharacter()

    return (
        <>
            <HeadMeta title={"Character"}/>
            {character && <CharacterCards character={character}/>}
        </>
    );
}

Character.getLayout = getLayout
export default Character
