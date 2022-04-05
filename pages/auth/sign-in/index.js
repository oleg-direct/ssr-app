import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import Layout from '@components/Layouts/Auth'
import SignInForm from '@components/Auth/SignInForm'

const SignInPage = () => {
  return (
    <Layout title="Sign In">
      <SignInForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default SignInPage;    