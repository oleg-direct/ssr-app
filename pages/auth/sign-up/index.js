import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import { Container, Grid, Paper, Typography } from "@mui/material";
import Layout from '@components/Layouts/Auth'
import SignUpForm from '@components/Auth/SignUpForm'

const SignUpPage = () => {
  return (
    <Layout title="Sign Up">
      <Grid container component="main" sx={{ height: '100vh' }}>
      {/* <Container maxWidth="lg" sx={{background: 'green'}}> */}
        <Grid
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
            Sign Up
          </Typography>
          <SignUpForm />
        </Grid>
      {/* </Container> */}
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignUpPage;