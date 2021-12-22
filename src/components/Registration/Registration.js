import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  form: {
    marginTop: '30',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: '15px',
  },
});

export default function FormPropsTextFields() {
  const classes = useStyles();

  const handelSubmit = e => {
    e.preventDefault();

    console.log('1');
  };

  return (
    <Box
      className={classes.container}
      component="form"
      onSubmit={handelSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.form}>
        <TextField required id="outlined-required" label="Email" type="e" defaultValue="" />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>

      <Button variant="contained" type="submit" className={classes.button}>
        Sign up
      </Button>
    </Box>
  );
}
