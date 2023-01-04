import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({deleteContact, contacts}) => {
    return(
        <ul>
            {contacts.map(contact=>(
            <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                    <button type='button' onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };