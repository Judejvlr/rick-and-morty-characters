import { screen } from '@testing-library/react'
import Loader from '../../../components/elements/Loader'
import { RickAndMortyTheme } from '../../../theme/theme'
import { render } from '../../../utils/test-util'

test('Render Loader primary correctly', () => {
  render(<Loader variant='primary' />)
  expect(screen.getByTestId('loader')).toHaveStyle(`
  border: 10px solid rgba(0,0,0,.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  border-left-color: ${RickAndMortyTheme.palette.primary};
  `)
})

test('Render Loader secondary correctly', () => {
  render(<Loader variant='secondary' />)
  expect(screen.getByTestId('loader')).toHaveStyle(`
  border: 10px solid rgba(0,0,0,.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  border-left-color: ${RickAndMortyTheme.palette.secondary};
  `)
})