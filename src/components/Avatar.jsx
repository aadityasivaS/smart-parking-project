import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import firebase from 'firebase/app';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar className={classes.orange} onClick={() => {
        confirmAlert({
          title: 'Do you want to sign out ?',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => firebase.auth().signOut()
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ]
        });
      }}>
        <AccountCircleIcon />
      </Avatar>
    </div>
  );
}