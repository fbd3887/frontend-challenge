type BlackAndWhiteColorOptions = {
  white: string;
  background: string;
  line: string;
  placeHolder: string;
  disable: string;
  bodyText: string;
  subtitle: string;
  title: string;
  black: string;
};

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    lightest?: string;
    lighter?: string;
    light: string;
    main: string;
    dark: string;
    darker?: string;
  }

  interface PaletteColor {
    lightest?: string;
    lighter?: string;
    light: string;
    main: string;
    dark: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lightest?: string;
    lighter?: string;
    light?: string;
    main: string;
    dark?: string;
    darker?: string;
  }

  interface Pallete {
    bw: BlackAndWhiteColorOptions;
  }

  interface PaletteOptions {
    bw: BlackAndWhiteColorOptions;
  }

  interface Palette {
    bw: BlackAndWhiteColorOptions;
  }

  interface PaletteOptions {
    bw: BlackAndWhiteColorOptions;
  }
}

export {};
