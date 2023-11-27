import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth';
import { selectUser } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import { DivStyle } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  return (
    <>
      <NavLink to="/contacts">
        Contacts
      </NavLink>
      <DivStyle>
        <p>{name}</p>
        <button onClick={() => dispatch(logOut())}>Log out</button>
      </DivStyle>
    </>
  );
};

export default UserMenu; 