import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage';
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Auth';
import ForgotPasswordSubmitForm from '@components/Auth/ForgotPasswordSubmitForm';

const ForgotPasswordSubmitPage = () => {
  return (
    <Layout title="Update Password">
      <ForgotPasswordSubmitForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context);
}

export default ForgotPasswordSubmitPage;