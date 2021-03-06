import '../configureAmplify'     
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
// import "/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import theme from '../lib/mUiTheme';
// import Router from 'next/router';

// import { Provider as MobxProvider } from 'mobx-react';
// import { useStore } from '../store.js';
// import { Provider as AuthProvider } from "next-auth/client";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {  
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [signedInUser, setSignedInUser] = useState(false);
  
  useEffect(() => {
    authListener()
  })

  async function authListener() {
    Hub.listen('auth', (data) => {
      // console.log('hub', data)
      switch (data.payload.event) {
        case 'signIn':
          return setSignedInUser(true)
        case 'signOut':  
          return setSignedInUser(false)
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setSignedInUser(true)
    } catch (err) {}
  }

  // const store = useStore(pageProps.initialState)
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <MobxProvider store={store}> */}
          {/* <AuthProvider session={pageProps.session}> */}
            <NextNProgress
            color="#FFFFFF"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}/>
            <Component {...pageProps} userSignedIn={signedInUser} />
          {/* </AuthProvider> */}
        {/* </MobxProvider> */}
      </ThemeProvider>
    </CacheProvider>
  )
}