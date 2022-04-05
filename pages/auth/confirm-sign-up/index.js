import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage';
import Layout from '@components/Layouts/Auth';
import ConfirmSignUpForm from '@components/Auth/ConfirmSignUpForm';

const ConfirmSignUpPage = () => {
  return (
    <Layout title="Confirm Sign up">
      <ConfirmSignUpForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context);
}

export default ConfirmSignUpPage;