import { screen } from '@testing-library/react'
import { ImageCover } from '../../../components/elements/ImageCover'

import { render } from '../../../utils/test-util'

const avatar = {
  image: "",
  alt: "test image",
  variant: ""
}

test('Render ImageCover correctly with default image', () => {
  render(<ImageCover {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveAttribute('src', 'https://w0.peakpx.com/wallpaper/940/144/HD-wallpaper-rick-and-morty-logo-ultra-cartoons-others-logo-rickandmorty.jpg')
})

test('Render ImageCover correctly', () => {
  avatar.image = "https://i.blogs.es/0a266c/d734f79559377cb87c44dde4e49800bf/450_1000.webp";
  render(<ImageCover {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveAttribute('src', 'https://i.blogs.es/0a266c/d734f79559377cb87c44dde4e49800bf/450_1000.webp')
})