import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'; 
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'; 
import { nanoid } from '@reduxjs/toolkit'; 
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading, selectVisibleContacts, } from '../../redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const arrContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // console.log(arrContacts);
  const showArr = Array.isArray(arrContacts) && arrContacts.length > 0; 
 
  return (
  <div>  
    <ul className={css.contactList}>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {showArr &&
         arrContacts.map(contact => {
          return <Contact contact={contact} key={nanoid()} />;
        })}
    </ul> 
    </div >
  )  

} 