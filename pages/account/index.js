import { getServerSidePropsAuthPage } from '../../utils/getServerSidePropsProtectedPage';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Layout from '@components/Layouts/Default';
import Link from '../../components/common/Link'

const AccountPage = (props) => {
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
          Account
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome, {user.name}
        </Typography>
        <Box mt={2} mb={2}>
          <Button variant="contained" component={Link} href="/account/change-password">Change Password</Button>
        </Box>
        <Box mt={2} mb={2}>
          <Button variant="contained">Update Profile</Button>
        </Box>
        <Button variant="contained" onClick={() => signOut()}>Sign Out</Button>
      </Container>
    </Layout>
  );

};

export async function getServerSideProps(context) {
  return getServerSidePropsAuthPage(context)
}

export default AccountPage;