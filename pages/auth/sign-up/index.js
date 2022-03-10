import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default'
import SignUpForm from '@components/Auth/SignUpForm'

const SignUpPage = () => {
  return (
    <Layout title="Sign Up">
      <Container maxWidth="lg">
        <h1>Sign Up</h1>
        <SignUpForm />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignUpPage;