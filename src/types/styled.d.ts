import 'styled-components';

export interface Variant {
  variant?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      secondary: string
      background: string,
    }
  }
}