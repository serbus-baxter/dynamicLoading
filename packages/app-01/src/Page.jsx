import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flex: 1
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

export default function Page({ title, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* {console.log("manifest:" +  manifest)} */}
      <div className={classes.content}>{children}</div>
    </div>
  );
}
