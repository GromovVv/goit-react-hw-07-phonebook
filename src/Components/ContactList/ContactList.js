import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/phonebook-operations';
import { getVisibleContacts } from '../../Redux/phonebook-selectors';
import PropTypes from 'prop-types';

import './ContactList.scss';

function ContactList({contacts}) {
  useEffect(() => { dispatch(getVisibleContacts) });
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className="Contact__list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="ContactList__item">
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className="ContactList__btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => console.log(dispatch(fetchContacts())),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// render() {
//   const { contacts, onDeleteContact } = this.props;
// //   const contacts = useSelector(getVisibleContacts);
// // const dispatch = useDispatch();
//   return (
//     <ul className="Contact__list">
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className="ContactList__item">
//           {name}: {number}
//           <button
//             type="button"
//             onClick={() => onDeleteContact(id)}
//             className="ContactList__btn"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
