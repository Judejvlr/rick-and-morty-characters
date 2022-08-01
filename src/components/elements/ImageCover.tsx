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
  const rickAndMortyLogo = 'https://w0.peakpx.com/wallpaper/940/144/HD-wallpaper-rick-and-morty-logo-ultra-cartoons-others-logo-rickandmorty.jpg'
  return <StyledImageCover src={image ? image : rickAndMortyLogo} alt={alt} />
}