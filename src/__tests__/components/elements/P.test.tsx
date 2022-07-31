import { screen } from "@testing-library/react";
import P from "../../../components/elements/P";
import { RickAndMortyTheme } from "../../../theme/theme";
import { render } from "../../../utils/test-util";


test(('P render properly'), () => {
  const testP = {
    text: 'Test',
  }
  render(<P>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${RickAndMortyTheme.palette.secondary};`)
})
