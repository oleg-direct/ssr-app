import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton"
import Home from "@mui/icons-material/Home"
import MuiNextLink from "@components/common/Link";
import Navbar from "@components/Layouts/Navbar";
import SideDrawer from "@components/Layouts/SideDrawer";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = (props) => {
  const [user, setUser] = useState(null);
  const [links, setLinks] = useState([
    { title: `Home`, path: `/` },
    { title: `About`, path: `/about` },
    { title: `Contact`, path: `/contact` },
  ]);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    let user;
    try {
      user = await Auth.currentAuthenticatedUser();
      setUser(user.attributes);
      setLinks(links => [...links, {title: `Account`, path: `/account`}]);
    } catch(error) {
      setLinks(links => [...links, {title: `Sign Up`, path: `/auth/sign-up`}, {title: `Sign In`, path: `/auth/sign-in`}]);
    }
  }
  
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <IconButton edge="start" aria-label="home">
            <MuiNextLink activeClassName="active" href="/">
                <Home
                sx={{
                    color: (theme) => theme.palette.common.white,
                }}
                fontSize="large"
                />
            </MuiNextLink>
            </IconButton>
            <Navbar navLinks={links} />
            <SideDrawer navLinks={links} />
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;