import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './redux/contactsSlice';
import { labelStyle, inputStyle } from './styles';

export const Filter = ({ filter, handleChange }) => {
  // const filterValue = typeof filter === 'string' ? filter : '';
  const filterValue = typeof filter !== 'function' ? filter : '';


  return (
    <label style={labelStyle}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChange}
        style={inputStyle}
      />
    </label>
  );
};


Filter.propTypes = {
  filter: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
};


// Filter.propTypes = {
//   filter: PropTypes.string,
//   handleChange: PropTypes.func.isRequired,
// };



// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './redux/contactsSlice';
// import { labelStyle, inputStyle } from './styles';

// export const Filter = ({ filter, handleChange }) => {
//   const filterValue = typeof filter === 'string' ? filter : '';

//   return (
//     <label style={labelStyle}>
//       Find contacts by name
//       <input
//         type="text"
//         name="filter"
//         value={filterValue}
//         onChange={handleChange}
//         style={inputStyle}
//       />
//     </label>
//   );
// };

// Filter.propTypes = {
//   // filter: PropTypes.string,
//   handleChange: PropTypes.func.isRequired,
// };




// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './redux/contactsSlice';
// import { labelStyle, inputStyle } from './styles';

// export const Filter = () => {
//  const filter = useSelector((state) => state.contacts.filter);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <label style={labelStyle}>
//       Find contacts by name
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//         style={inputStyle}
//       />
//     </label>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };



// import PropTypes from 'prop-types';
// import { labelStyle, inputStyle } from './styles';

// export const Filter = ({ filter, handleChange }) => (
//     <label style={labelStyle}>
//       Find contacts by name
//       <input
//         type="text" name="filter"
//         value={filter}
//         onChange={handleChange}
//         style={inputStyle} />
//     </label>
//   );

//   Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     handleChange: PropTypes.func.isRequired,
//   };