import styled from "styled-components";
import Character from "../../types/character";
import Card from "./Card";

interface CardListProps {
  characters: Character[]
}

const StyledCardList = styled.div`
  display: grid;
  min-height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
  padding: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: masonry;
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  gap: 1.5rem 1.5rem;
  align-items: center;
  
`

/**
 * CardList is a function that takes in an object with a property called characters and returns a
 * styled div with a list of CharacterCard components
 * @param {CardListProps}  - CardListProps
 * @returns An array of CharacterCard components.
 */
export function CardList({ characters }: CardListProps) {
  return (
    <StyledCardList>
      {characters.map((character: Character) => {
        return (
          <Card
            key={character.id}
            {...character}
          />
        )
      })}
    </StyledCardList>
  )
}