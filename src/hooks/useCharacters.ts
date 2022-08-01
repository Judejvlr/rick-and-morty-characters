
import { useEffect, useState } from 'react'
import getCharacters from '../services/getCharacters';
import Character from '../types/character';

const INITIAL_PAGE = 1

export function useCharacters() {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [characters, setCharacters] = useState([] as Array<Character>)

  useEffect(function () {
    setLoading(true)
    getCharacters()
      .then((characters: Array<Character>) => {
        setCharacters(characters)
        setLoading(false)
      })
  }, [setCharacters])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    getCharacters(page)
      .then((nextCharacters: Array<Character>) => {
        setCharacters((prevCharacters: Character[]) => prevCharacters.concat(nextCharacters))
        setLoading(false)
      })
  }, [page, setCharacters])

  return { loading, loadingNextPage, characters, setPage }
}