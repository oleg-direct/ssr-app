import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsAuthPage'
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default'
import VerifyEmailForm from '@components/Auth/VerifyEmailForm'

const VerifyEmailPage = () => {
  return (
    <Layout title="Verify Email">
      <Container maxWidth="lg">
        <h1>Verify Email</h1>
        <VerifyEmailForm />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default VerifyEmailPage;