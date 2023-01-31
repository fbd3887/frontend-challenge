import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../styles/theme/index';
import '../styles/globals.css';
import { LayoutComponent } from '@/layout';
import { NextComponentType } from 'next';
import { Provider } from 'react-redux';
import store from 'store/configureStore';

type NextComponentWithLayout = NextComponentType & {
  layout: LayoutComponent;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextComponentWithLayout;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightThemeOptions}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
