import Card from "../../../components/blocks/Card"
import { render } from "../../../utils/test-util"
import { fireEvent, screen } from "@testing-library/react";
import { RickAndMortyTheme } from "../../../theme/theme";


const characterTest = {
  name: 'Judelys Lagos',
  gender: 'Female',
  status: 'Alive',
  image: 'https://i.blogs.es/0a266c/d734f79559377cb87c44dde4e49800bf/450_1000.webp',
}


test('Card render properly', () => {
  render(<Card {...characterTest} />)
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${RickAndMortyTheme.palette.primary}
    `)
})

test('Card flip properly', () => {
  render(<Card {...characterTest} />)
  fireEvent.click(screen.getByRole('article'))
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${RickAndMortyTheme.palette.primary};
    transform: rotateY(180deg)
    `)
})
