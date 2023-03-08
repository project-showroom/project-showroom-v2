import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    loginButtonColor: {
      main: '#434242',
      contrastText: '#fff',
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    loginButtonColor: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    loginButtonColor: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    loginButtonColor?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    loginButtonColor: true;
  }
}

export { lightTheme, darkTheme };
