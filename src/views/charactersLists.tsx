import debounce from 'just-debounce-it';
import React, { useCallback, useEffect, useRef } from 'react';
import { CardList } from '../components/blocks/CardList';
import Loader from '../components/elements/Loader';
// import i18n from '../config/i18n';
import { useCharacters } from '../hooks/useCharacters';
import useNearScreen from '../hooks/useNearScreen';

export default function CharactersList() {
  const { loading, loadingNextPage, characters, setPage } = useCharacters()
  const externalRef = useRef<HTMLDivElement>(null)
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(() => debounce(
    () => setPage((prevPage: number) => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <React.Fragment>
      {loading ? <Loader variant="secondary" />
        :
        <React.Fragment>
          <CardList characters={characters} />
          {loadingNextPage && <Loader variant="secondary" />}
          <div id="visor" ref={externalRef}></div>
        </React.Fragment>
      }
    </React.Fragment >
  )
}