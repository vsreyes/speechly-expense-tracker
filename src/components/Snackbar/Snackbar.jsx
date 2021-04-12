import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlart from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') return;

    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
      >
        <MuiAlart onClose={handleClose} severity="success" elevation={6} variant="filled">
          Transaction successfully created.
        </MuiAlart>
      </Snackbar>
    </div>
  )
}

export default CustomizedSnackbar
