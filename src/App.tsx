import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyles';
import { RickAndMortyTheme } from './theme/theme';
import CharactersList from './views/charactersLists';
import './config/i18n';
import i18n from './config/i18n';

function App() {

  useEffect(() => {
    window.addEventListener('storage', handleLanguage)
    return (() => window.removeEventListener('storage', handleLanguage))
  }, []);

  const handleLanguage = () => {
    const lang = localStorage.getItem('lang')
    i18n.changeLanguage(lang ?? undefined)
  }

  return (
    <div className="Micro-App">
      <ThemeProvider theme={RickAndMortyTheme}>
        <GlobalStyle />
        <CharactersList />
      </ThemeProvider>
    </div>
  );
}

export default App;
