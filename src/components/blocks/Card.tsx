import { useState } from "react";
import styled from "styled-components";
import Character from "../../types/character";
import Characteristic from "./Characteristic";
import H3 from "../elements/H3";
import { ImageCover } from "../elements/ImageCover";

interface Flip {
  flip: boolean
}

interface CardProps extends Character { }

const StyledCard = styled.article<Flip>`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transform-style: preserve-3d;
  transition: all 0.5s linear;
  position: relative;
  perspective: 1000px;
  height: 100%;
  border-radius: 5px;
  transform: ${props => props.flip ? 'rotateY(180deg)' : ''};
  background-color: ${props => props.theme.palette.primary};
  &:hover{
    transform:  ${props => props.flip ? 'rotateY(160deg)' : 'rotateY(20deg)'};
    cursor: pointer;
  } 
`
const CardAnverse = styled.div`
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const CardReverse = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      padding: 1rem;
`



export default function Card({ image, name, gender, status }: CardProps) {
  const [flip, setFlip] = useState(false)
  const characteristics: { [key: string]: any } = { name, gender, status }

  return (
    <StyledCard flip={flip} onClick={() => setFlip(!flip)}>
      <CardAnverse>
        <ImageCover image={image} alt={name} />
      </CardAnverse>
      <CardReverse>
        <H3>{name}</H3>
        {
          Object.keys(characteristics).map((key, index) => {
            return <Characteristic label={key} value={characteristics[key]} key={index} />
          })
        }
      </CardReverse>
    </StyledCard>
  )
}