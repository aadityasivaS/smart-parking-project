import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from './Avatar';
import firebase from 'firebase/app';

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

export default function ButtonAppBar() {
  const classes = useStyles();
  const [loggedIn, change] = useState(firebase.auth().currentUser ? true : false);
  firebase.auth().onAuthStateChanged((user) => {
    change(user ? true : false);
  });
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Smart Parking
          </Typography>
          {loggedIn ? <Avatar /> :<a href="/login" className="reset-a"><Button color="inherit">Login</Button></a>}
        </Toolbar>
      </AppBar>
    </div>
  );
}