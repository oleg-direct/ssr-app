import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage';
import Layout from '@components/Layouts/Auth';
import ForgotPasswordForm from '@components/Auth/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <Layout title="Forgot Password">
      <ForgotPasswordForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context);
}

export default ForgotPasswordPage;