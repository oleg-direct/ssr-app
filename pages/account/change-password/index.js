import { getServerSidePropsAuthPage } from '../../../utils/getServerSidePropsProtectedPage';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Layout from '@components/Layouts/Default';

const ChangePasswordPage = (props) => {
  const { user } = props
  const router = useRouter()

  const signOut = () => {
    Auth.signOut().then(() => {
      router.push('/');
    })
  }
  
  return (
    <Layout title="Profile">
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Change Password
        </Typography>
      </Container>
    </Layout>
  );

};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default ChangePasswordPage;