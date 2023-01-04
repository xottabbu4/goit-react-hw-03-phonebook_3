import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target;
    addContact({ [name.name]: name.value, [number.name]: number.value });
    event.target.reset();
  };
  return (
    <>
      <div>
        <form className={css.form} onSubmit={handleSubmit}>
          <p className={css.formText}>Name</p>
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p className={css.formText}>Number</p>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.formButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
