import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations'; 
import css from './Contact.module.css';
import { nanoid } from '@reduxjs/toolkit';

export default function Contact({ contact }) {
  const dispatch = useDispatch(); 
  const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <li className={css.contacts} id={contact.id} key={nanoid()}>  
        <span className={css.contactsName}>{contact.name}</span> 
        <span className={css.contactsNumber}>{contact.phone}</span>
         <button
        type="button"
        onClick={handleDelete}
        className={css.contactsBtn}> 
        Delete
      </button> 
    </li>
  );
}; 



