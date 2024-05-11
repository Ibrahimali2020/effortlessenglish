import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.svg";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#fc4c3d",
      opacity: 1,
    },
  })
);

const StyledButton = styled((props) => <Button {...props}></Button>)(
  ({ theme }) => ({
    color: "#fff",
    borderRadius: 10,
  })
);

export default function Header(props) {
  const [value, setValue] = useState(0);

  function handleChange(e, value) {
    setValue(value);
  }
  return (
    <HideOnScroll>
      <AppBar position="fixed" color="info">
        <Toolbar>
          <Button component={Link} to="/">
            <img style={{ height: 50 }} alt="company logo" src={logo} />
          </Button>

          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ marginLeft: "auto" }}
            indicatorColor="info"
            textColor="secondary"
          >
            <StyledTab label="Home" component={Link} to="/" />
            <StyledTab label="Courses" component={Link} to="/courses" />
            <StyledTab label="About Us" component={Link} to="/about" />
            <StyledTab label="Contact Us" component={Link} to="/contact" />
            <StyledTab label="FAQ" component={Link} to="/faq" />
            <StyledTab label="Meet AJ" component={Link} to="/meetaj" />
          </Tabs>

          <StyledButton variant="contained">Get Started 👉</StyledButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
