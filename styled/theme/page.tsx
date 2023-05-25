
import { createTheme, ThemeProvider, SimplePaletteColorOptions } from '@mui/material/styles';
import { blue, green, orange, red } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { BreakpointOverrides } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

const commonColors: {
  white: string;
  gray: string;
} = {
  white: '#ffffff',
  gray: '#808080',
};

const Theme = createTheme({
  palette: {
    primary: {
      main: '#2b3395',
    },
    secondary: {
      main: '#ff0000',
    },
    common: commonColors,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
});
export default Theme;