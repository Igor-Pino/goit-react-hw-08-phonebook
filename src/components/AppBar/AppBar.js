import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBarHeader from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  pages: {
    display: 'flex',
    alignItems: 'start',
  },

  navPage: {
    marginRight: '25px',
  },

  logPages: {
    display: 'flex',
    marginRight: '20px',
    marginLeft: 'auto',
  },
});

function AppBar() {
  const s = useStyles();

  const isLogged = true;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarHeader position="static">
        <Toolbar>
          <div className={s.pages}>
            <div className={s.navPage}>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/">Home</NavLink>
              </Typography>
            </div>
            <div>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/contacts">Contacts</NavLink>
              </Typography>
            </div>
          </div>

          <div className={s.logPages}>
            <div className={s.navPage}>
              {isLogged ? (
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  <NavLink to="/login">
                    <span className={s.logTitle}>Login</span>
                  </NavLink>
                </Typography>
              ) : (
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  <NavLink to="/login">
                    <span className={s.logTitle}>Logout</span>
                  </NavLink>
                </Typography>
              )}
            </div>

            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/registration">
                <span className={s.logTitle}>SingUp</span>
              </NavLink>
            </Typography>
          </div>
        </Toolbar>
      </AppBarHeader>
    </Box>
  );
}

export default AppBar;
