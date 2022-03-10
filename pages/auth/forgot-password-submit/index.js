import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage';
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default';
import ForgotPasswordSubmitForm from '@components/Auth/ForgotPasswordSubmitForm';

const ForgotPasswordSubmitPage = () => {
  return (
    <Layout title="Forgot Password Submit">
      <Container maxWidth="lg">
        <h1>Forgot Password Submit</h1>
        <ForgotPasswordSubmitForm />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context);
}

export default ForgotPasswordSubmitPage;