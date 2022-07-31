import { screen } from "@testing-library/react";
import Chip from "../../../components/elements/Chip";
import { RickAndMortyTheme } from "../../../theme/theme";
import { render } from "../../../utils/test-util";

test(('Chip render properly'), () => {
  const testChip = {
    label: 'Test',
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${RickAndMortyTheme.palette.secondary};
  color: ${RickAndMortyTheme.palette.primary};`)
})
