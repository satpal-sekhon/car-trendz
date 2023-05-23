
import { createTheme, ThemeProvider, SimplePaletteColorOptions } from '@mui/material/styles';
import { blue, green, orange, red } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles/createPalette';



const Theme = createTheme({
    palette: {
        primary: {
            main: '#405189', // Custom primary color
        },
        secondary: {
            main: '#ff0000', // Custom secondary color
        },
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
        },
      },
});
export default Theme;