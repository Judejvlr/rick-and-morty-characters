import { screen } from "@testing-library/react";
import H3 from "../../../components/elements/H3";
import { RickAndMortyTheme } from "../../../theme/theme";
import { render } from "../../../utils/test-util";


test((' H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
  }
  render(<H3>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${RickAndMortyTheme.palette.secondary};`)
})
