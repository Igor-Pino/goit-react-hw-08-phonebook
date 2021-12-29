import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Redux/Contacts/contacts-actions';
import { getFilter } from '../../Redux/Contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterChange(e.target.value));
  const filterValue = useSelector(getFilter);

  return (
    <label>
      <span>Contact filter</span>
      <input type="text" name="filter" value={filterValue} onChange={onChange} />
    </label>
  );
};

export default Filter;
