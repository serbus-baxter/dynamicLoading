import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from "@material-ui/core";

import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {

     // backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    Typography : {
      margin : "0px 20px",
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Link to="/">
                <Button  variant="contained" className={classes.button}>
                  Go To Apps
                </Button>
              </Link>
              <Typography variant="h6" noWrap className={classes.Typography}>
                Module Federation
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <div className={classes.toolbar} />  
            <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
