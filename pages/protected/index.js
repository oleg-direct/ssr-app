import { withSSRContext } from 'aws-amplify'
import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default'

function Protected({ authenticated, username }) {
  if (!authenticated) {
    return <h1>Not authenticated</h1>
  }
  return <h1>Hello {username} from SSR route!</h1>
}

const ProtectedPage = ({ authenticated, username }) => {
  return (
    <Layout title="Protected">
      <Container maxWidth="lg">
        {authenticated &&
          <h2>
            Hello {username} from SSR route!
          </h2>
        }
        {!authenticated &&
          <h2>
            Not authenticated
          </h2>
        }
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { Auth } = withSSRContext(context)
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user: ', user)
    return {
      props: {
        authenticated: true, username: user.username
      }
    }
  } catch (err) {
    return {
      props: {
        authenticated: false
      }
    }
  }
}

export default ProtectedPage;