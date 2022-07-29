import styled from "styled-components"

interface ChipProps {
  label: string
}

const StyledChip = styled.span`
padding: 0.25rem;
border-radius: 5px;
background-color: ${props => props.theme.palette.secondary};
color: ${props => props.theme.palette.primary};
font-weight: bolder;
  `

/**
 * It's a function that takes a variant, inverted, and label prop and returns a styled chip component
 * with the label
 * @param {ChipProps}  - ChipProps
 * @returns A StyledChip component with a label prop.
 */
export default function Chip({ label }: ChipProps) {
  return (
    <StyledChip>
      {label}
    </StyledChip>
  )
}