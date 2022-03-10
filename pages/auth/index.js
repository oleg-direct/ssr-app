import { withSSRContext } from "aws-amplify";
import '../../configureAmplify'
import { Auth } from 'aws-amplify'

const AuthPage = () => {
  return (
      null
  )
};

export async function getServerSideProps(context) {
  const { Auth } = withSSRContext(context)
  
  let user;
  try {
    user = await Auth.currentAuthenticatedUser();
    
    return {
      redirect: {
        destination: '/about',
        permanent: false,
      },
      props: {
        user: null
      }
    }
  } catch (err) {
    return {
        redirect: {
          destination: '/auth/sign-in',
          permanent: false,
        },
        props: {
          user: null
        }
    }
  }
}

export default AuthPage;