import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Chip from "../elements/Chip";
import P from "../elements/P";

interface CharacteristicProps {
  label: string,
  value: string | boolean | number | Array<string>,
}

export const StyledCharacteristic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0.25rem 0;
`

/**
 * It takes in a label, value, variant, invertedValue, and invertedLabel and returns a styled
 * characteristic
 * @param {CharacteristicProps}  - label - the label of the characteristic
 */
export default function Characteristic({ label, value }: CharacteristicProps) {
  const { t } = useTranslation()
  return (
    <StyledCharacteristic>
      <Chip label={t(`${label}`)} />
      <P>{value === '' ? t('unknown') : t(`${value}`) ?? value}</P>
    </StyledCharacteristic>
  )
}