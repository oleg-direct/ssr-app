import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage';
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default';
import ConfirmSignUpForm from '@components/Auth/ConfirmSignUpForm';

const ConfirmSignUpPage = () => {
  return (
    <Layout title="Confirm Sign Up">
      <Container maxWidth="lg">
        <h1>Confirm Sign Up</h1>
        <ConfirmSignUpForm />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context);
}

export default ConfirmSignUpPage;