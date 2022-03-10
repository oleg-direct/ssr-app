import Container from "@mui/material/Container";
import Layout from '@components/Layouts/Default';

const AboutPage = (props) => {
  return (
    <Layout title="About">
      <Container maxWidth="lg">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
          porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
          praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
          ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
          alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
          necessitatibus velit laborum.
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;