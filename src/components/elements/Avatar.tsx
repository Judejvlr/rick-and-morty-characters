import styled from 'styled-components'


interface AvatarProps {
  image: string,
  alt: string
}


const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  border: 0.25rem solid;
`

export default function Avatar({ image, alt }: AvatarProps) {
  const HPLogo = 'https://logodix.com/logo/1188650.jpg';

  return (
    <StyledAvatar src={image ? image : HPLogo} alt={alt} />
  )
}