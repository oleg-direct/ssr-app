import { withSSRContext } from "aws-amplify";
import '../configureAmplify'

export async function getServerSidePropsAuthPage(context) {
  const { Auth } = withSSRContext(context)
  
  let user;
  try {
    user = await Auth.currentAuthenticatedUser();
    // console.log('---------------- YES AUTH ------------------');
    // console.log('user', user);
    // console.log('----------------------------------');
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    }
  } catch (err) {
    // console.log('---------------- NO AUTH ------------------');
    // console.log('user', err);
    // console.log('----------------------------------');
    return {
      props: {
        user: null
      }
    }
  }
}