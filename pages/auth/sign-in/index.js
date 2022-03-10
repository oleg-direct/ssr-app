import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default'
import SignInForm from '@components/Auth/SignInForm'

const SignInPage = () => {
  return (
    <Layout title="Sign In">
      <Container maxWidth="lg">
        <h1>Sign In</h1>
        <SignInForm />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignInPage;    