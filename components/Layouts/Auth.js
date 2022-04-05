import Head from 'next/head'
import Image from 'next/image'
import { Container, Grid } from "@mui/material";
import bg from '../../public/auth-bg.jpg'

export default function Layout(props) {
  const { title, children } = props

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
        </Head>
        <body style={{background: "#e4e7ec"}}>
          <Grid container alignItems="stretch" sx={{
            height: '100vh',
            backgroundImage:  `url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <Container>
              <Grid container sx={{
                minHeight: '100vh',
              }}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={12} md={6}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Image
                      width="264px"
                      height="110px"
                      src="/landify.svg"
                      alt="Landify"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  xs={12} md={6}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    {children}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </body>
      </>
    )
  }