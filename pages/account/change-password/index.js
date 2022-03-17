import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsProtectedPage';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Layout from '@components/Layouts/Default';
import ChangePasswordForm from '@components/Auth/ChangePasswordForm'

const ChangePasswordPage = (props) => {
  
  return (
    <Layout title="Profile">
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Change Password
        </Typography>
        <ChangePasswordForm />
      </Container>
    </Layout>
  );

};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default ChangePasswordPage;