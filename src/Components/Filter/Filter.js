import PropTypes from 'prop-types';

import { useSelector, useDispatch, connect } from 'react-redux';
import { getFilter } from '../../Redux/phonebook-selectors';
import { changeFilter } from '../../Redux/phonebook-actions';
import './Filter.scss';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const change = event => dispatch(changeFilter(event.target.value));

  return (
    <div className="Filter">
      <label>
        <input
          className="Filter__input"
          name="filter"
          type="text"
          value={value}
          onChange={change}
          title="Type name or number of Subscriber"
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
