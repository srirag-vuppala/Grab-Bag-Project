import { extendTheme } from '@chakra-ui/react';

import "@fontsource/lato"
import "@fontsource/roboto"

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Roboto',
    body: 'Lato',
  },
  colors: {
    brand: {
      // If you are reading this these are Ifixit colors!
      black: '#222223',
      blue: '#0071CE',
      navbarBlue: '#111827'
    },
  },
});

export default customTheme;
