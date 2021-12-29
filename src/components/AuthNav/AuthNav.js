import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navBlock: {
    display: 'flex',
  },

  navItem: {
    marginRight: '15px',
  },
});

export default function AuthNav() {
  const s = useStyles();
  return (
    <div className={s.navBlock}>
      <Typography variant="h7" component="div" mr={3.5} sx={{ flexGrow: 1 }} className={s.navItem}>
        <NavLink to="/login">
          <span className={s.logTitle}>Login</span>
        </NavLink>
      </Typography>

      <Typography variant="h7" component="div" sx={{ flexGrow: 1 }} className={s.navItem}>
        <NavLink to="/registration">
          <span className={s.logTitle}>SignUp</span>
        </NavLink>
      </Typography>
    </div>
  );
}
