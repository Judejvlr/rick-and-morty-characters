import styled, { css } from "styled-components";
import { Variant } from "../../types/styled";


const StyledLoader = styled.div<Variant>`
  border: 10px solid rgba(0,0,0,.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
        border-left-color: ${props.theme.palette.primary};
        `
      case "secondary":
        return css`
          border-left-color: ${props.theme.palette.secondary};
        `
      case "default":
        return css`
          border-left-color: #e7e0db;
        `
    }
  }}
  
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
  @keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
`

export default function Loader({ variant }: Variant) {
  return (
    <StyledLoader variant={variant} />
  )
}

