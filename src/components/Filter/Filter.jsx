import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ setFilter }) => {
    return (
      <div>
        <label>
        <p>Find contacts by name</p>
        <input type="text" onChange={setFilter} />
      </label>
      </div>
    );
  };

  Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
  };