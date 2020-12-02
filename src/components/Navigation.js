import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className="px-3">
        <Toolbar>
          <strong>
            {" "}
            <h1 className=" logo">SunFitness</h1>
          </strong>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="  d-flex
            d-lg-none"
              style={{
                color: "rgb(153,153,153)",
              }}
            >
              <FacebookIcon
                style={{
                  cursor: "pointer",
                }}
              />
              <TwitterIcon
                className="ml-3 "
                style={{
                  cursor: "pointer",
                }}
              />
              <InstagramIcon
                className="ml-3 "
                style={{
                  cursor: "pointer",
                }}
              />
            </div>

            <div
              className="d-none d-lg-flex"
              style={{
                display: "flex",
                flex: "0.6",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink to="/home" className="mr-5 head_nav text-responsive">
                Home
              </NavLink>
              <NavLink to="/about" className="mr-5 head_nav text-responsive">
                About
              </NavLink>
              <NavLink
                to="/instructors"
                className="mr-5 head_nav text-responsive"
              >
                Instructors
              </NavLink>
              <NavLink to="/blog" className="mr-5 head_nav text-responsive">
                Blog
              </NavLink>
              <NavLink to="/pricing" className="mr-5 head_nav text-responsive">
                Plans & Pricing
              </NavLink>
              <NavLink to="/booking" className="mr-5 head_nav text-responsive">
                Book Online
              </NavLink>
              <NavLink to="/contact" className="mr-5 head_nav text-responsive">
                Contact
              </NavLink>
            </div>
            <div
              className="d-none d-lg-flex  text-responsive"
              style={{
                width: "100%",
                display: "flex",
                flex: "0.3",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  marginRight: "5rem",
                  color: "rgb(103,241,200)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccountCircleIcon className="mr-1 text-responsive" />
                <Button
                  style={{
                    fontSize: "1.2rem",
                    textTransform: "capitalize",
                    color: "rgb(103,241,200)",
                  }}
                >
                  Login
                </Button>
              </div>

              <div
                style={{
                  color: "rgb(153,153,153)",
                  display: "flex",
                }}
              >
                <FacebookIcon
                  className="ml-3   "
                  style={{
                    cursor: "pointer",
                  }}
                />
                <TwitterIcon
                  className="ml-3 "
                  style={{
                    cursor: "pointer",
                  }}
                />
                <InstagramIcon
                  className="ml-3 "
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-block d-lg-none ml-4 ">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
