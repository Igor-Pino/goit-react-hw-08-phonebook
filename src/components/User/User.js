import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../Redux/Auth';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    marginRight: 12,
  },
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const logOut = () => {
    dispatch(authOperations.logOut());
    console.log(authOperations.logOut());
  };
  const s = useStyles();
  return (
    <div className={s.container}>
      <span className={s.name}>Wellcome, {name}</span>

      <IconButton aria-label="log out" onClick={logOut}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
}
