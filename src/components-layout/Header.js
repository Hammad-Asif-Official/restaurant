import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider
} from "@mui/material";
import React from "react";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
import {  NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Logo from '../images/logo.svg'
// import './App.css';

const Header = () => {
  const [mobileopen, setMobilOpen] = useState(false);
  // handel menu click
  const handlerDrawerToggle = () => {
    setMobilOpen(!mobileopen);
  };
  //menu drawer
  const drawer = (
    <Box onclick={handlerDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my:2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="250" />
      </Typography>

      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        {/* <li><NavLink to={'*'}>Pagenotfound</NavLink></li> */}
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handlerDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
               <img src={Logo} alt="logo" height={"70"} width="200" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-manu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                {/* <li><NavLink to={'*'}>Pagenotfound</NavLink></li> */}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handlerDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" },
             "& .MuiDrawer-paper":{
              boxSizing:'border-box',
              width:'240px'
          } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar />
        </Box>
       
      </Box>
    </>
  );
};

export default Header;
