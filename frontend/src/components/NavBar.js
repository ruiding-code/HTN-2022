import React from "react";
import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
import profile from "../assets/user.png";

const useStyles = makeStyles(() => ({
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "white",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      {/* <CssBaseline /> */}
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            <Link to="/home" className={classes.logo}>
              My Roomie
            </Link>
        </Typography>
          <div>
            <img style={{ width: 50}} src={profile}/>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
