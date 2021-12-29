import Loader from 'react-loader-spinner';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  loaderContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export default function FallbackLoader() {
  const s = useStyles();

  return (
    <div className={s.loaderContainer}>
      <Loader type="ThreeDots" color="#1976d2" height={80} width={80} timeout={3000} />
    </div>
  );
}
