import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Anek Latin', sans-serif",
    fontSize: 12,
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    fontWeightLight: 400,
  },
  palette: {
    bw: {
      white: '#FFFFFF',
      background: '#FAFAFA',
      line: '#EFEFEF',
      placeHolder: '#C4C4C4',
      disable: '#AAAAAA',
      bodyText: '#666666',
      subtitle: '#444444',
      title: '#222222',
      black: '#000000',
    },
    primary: {
      lightest: '#F9F3FD',
      lighter: '#DFC2F3',
      light: '#C085E7',
      main: '#810BCF',
      dark: '#4D077C',
      darker: '#340453',
    },
    success: {
      lightest: '#FCFEF2',
      lighter: '#F2F7BF',
      light: '#E4F080',
      main: '#CAE000',
      dark: '#798600',
      darker: '#515A00',
    },
    info: {
      lightest: '#F9FDFD',
      lighter: '#E1F2F6',
      light: '#C2E5ED',
      main: '#86CBDB',
      dark: '#507A83',
      darker: '#365158',
    },
    warning: {
      lightest: '#FFFBF4',
      lighter: '#FEEAC5',
      light: '#FDD68B',
      main: '#FBAD18',
      dark: '#97680E',
      darker: '#64450A',
    },
    error: {
      lightest: '#FEF7F9',
      lighter: '#FBD6E0',
      light: '#F8ADC0',
      main: '#F05B82',
      dark: '#90374E',
      darker: '#602434',
    },
  },
  spacing: 2,
  shape: {
    borderRadius: 8,
  },
});

export default theme;
