import styled from "styled-components";

interface ImageCoverProps {
  image: string,
  alt: string
}


const StyledImageCover = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export function ImageCover({ image, alt }: ImageCoverProps) {
  return <StyledImageCover src={image} alt={alt} />
}