import * as React from 'react';
import AppBarHeader from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import s from '../AppBar/AppBar.module.css';

export default function Skeleton() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarHeader position="static">
        <Toolbar>
          <div className={s.pages}>
            <div className={s.navPage}>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </div>
            <div>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                Contacts
              </Typography>
            </div>
          </div>

          <div className={s.logPages}>
            <div className={s.navPage}>Loading...</div>
          </div>
        </Toolbar>
      </AppBarHeader>
    </Box>
  );
}
