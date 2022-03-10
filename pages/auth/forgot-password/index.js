import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage';
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default';
import ForgotPasswordForm from '@components/Auth/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <Layout title="Forgot Password">
      <Container maxWidth="lg">
        <h1>Forgot Password</h1>
        <ForgotPasswordForm />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context);
}

export default ForgotPasswordPage;