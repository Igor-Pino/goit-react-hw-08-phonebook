import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Redux/Contacts/contacts-actions';
import { getFilter } from '../../Redux/Contacts/contacts-selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterChange(e.target.value));
  const filterValue = useSelector(getFilter);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="type name"
        id="outlined-basic"
        variant="outlined"
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </Box>
  );
};

export default Filter;
