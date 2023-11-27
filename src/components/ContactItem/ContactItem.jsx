import Loading from '../Loading/Loading';
import { deleteContact } from '../../redux/Contacts/contactsOperetions';
import { useDispatch, useSelector } from 'react-redux';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contacts);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <li>
          <span>{name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
       x
          </button>
        </li>
      )}
    </>
  );
};

export default ContactItem; 