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
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignUpPage;