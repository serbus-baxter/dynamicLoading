import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  createStyles,
  makeStyles
} from "@material-ui/core";

import { Link } from "react-router-dom";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);

export var manifestArr;
var s = "ss";

export default function SideNav(props) {
  const classes = useStyles();


  return (
    <div className={classes.toolbar}>
     {/* {console.log("manifest " + props.manifest)}
      {setManifest()}
      {console.log("manifest Arr " + manifestArr)}  */}
          <h2 variant="h6">SideNav Manifast </h2>    
          {/* {
            props.manifest.map(function(item, i){
            console.log('test');
            return <li key={i}>{item.icon}</li>
          })
          }    */}
    </div>
    // <Drawer
    //   className={classes.drawer}
    //   variant="permanent"
    //   classes={{
    //     paper: classes.drawerPaper
    //   }}
    //   anchor="left"
    // >
    //   <div className={classes.toolbar}>
    //     <Typography variant="h6">SideNav</Typography>
    //   </div>
    //   <Divider />
    //   <List>
    //     <ListSubheader>Demo Pages</ListSubheader>
    //     <ListItem button component={Link} to="/">
    //       <ListItemText primary="Main" />
    //     </ListItem>
    //     <ListItem button component={Link} to="/ui-library">
    //       <ListItemText primary="UI Library" />
    //     </ListItem>
    //     <ListItem button component={Link} to="/dialog">
    //       <ListItemText primary="Dialog" />
    //     </ListItem>
    //     <ListItem button component={Link} to="/routing/foo">
    //       <ListItemText primary="Routing" />
    //     </ListItem>
    //     <ListSubheader>Apps</ListSubheader>
    //     <ListItem button component="a" href="http://localhost:3001">
    //       <ListItemText primary="App #1" secondary="http://localhost:3001" />
    //     </ListItem>
    //     <ListItem button component="a" href="http://localhost:3002">
    //       <ListItemText primary="App #2" secondary="http://localhost:3002" />
    //     </ListItem>
    //     <ListItem button component="a" href="http://localhost:3003">
    //       <ListItemText primary="App #3" secondary="http://localhost:3003" />
    //     </ListItem>
    //   </List>
    // </Drawer>
  );
}
