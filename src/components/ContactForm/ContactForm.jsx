import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css'; 
import { addContact } from '../../redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: event.target.elements.name.value,
      phone: event.target.elements.phone.value,
    };

    const hasContact = contacts.some(
      contact => contact.name === event.target.elements.name.value
    );
    if (hasContact) {
      alert(`${hasContact} is already in contacts`);
      event.target.reset();
      return;
    }
    dispatch(addContact(newUser));
    event.target.reset();
  }; 

    return (
      <form className={css.form} onSubmit={handleSubmit}>   
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
                    
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formInput}
          type="tel"
          name="phone" 
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" 
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number" 
                    
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );  
  }
