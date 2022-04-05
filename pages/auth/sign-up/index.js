
import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import Layout from '@components/Layouts/Auth'
import SignUpForm from '@components/Auth/SignUpForm'


const SignUpPage = () => {
  return (
    <Layout title="Sign Up">
      <SignUpForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignUpPage;