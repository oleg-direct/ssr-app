import Image from 'next/image'
import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import { Container, Grid, Paper, Typography } from "@mui/material";
import Layout from '@components/Layouts/Auth'
import SignUpForm from '@components/Auth/SignUpForm'
import bg from '../../../public/auth-bg.jpg'
import logo from '../../../public/landify.svg'

const SignUpPage = () => {
  return (
    <Layout title="Sign Up">
      {/* <Grid container component="main" sx={{ height: '100vh' }}> */}
      {/* <Container maxWidth="lg" sx={{ height: '80vh', background: '#FFFFFF', borderRadius: 3,}}> */}
        <Grid container component="main" alignItems="stretch" sx={{
          background: 'pink',
          height: '100vh',
          backgroundImage:  `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            xs={12} md={6}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              >
              <Image
                src={logo}
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
              // sx={{
              //   background: 'blue'
              // }}
              container
              justifyContent="center"
              alignItems="center"
              >
              <SignUpForm />
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Typography variant="h3" gutterBottom component="div">
            Sign up
          </Typography>
          <SignUpForm />
        </Grid> */}
      {/* </Container> */}
      {/* </Grid> */}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignUpPage;