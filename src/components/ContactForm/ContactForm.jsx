import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsOperetions'; 
import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';   
import { Container } from 'components/App.styled';   

const schema = yup
  .object({
    name: yup.string().min(4).max(32).required(),
    number: yup.string().min(6).max(16).required(),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { items } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const onSubmit = data => {
    if (items.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      reset();
      return;
    }

    dispatch(addContact(data));

    reset();
  }; 

  return (
      < Container >
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>    
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
           {...register('name', { required: true })}
                    
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formInput}
          type="tel"
          name="phone" 
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" 
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number" {...register('number')} 
        />
         <span>{errors.number?.message}</span> 
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
  </Container>   
    );  
  }  
