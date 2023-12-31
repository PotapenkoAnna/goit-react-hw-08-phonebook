import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';       
import { Navigate, Route, Routes } from 'react-router-dom'; 
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/auth';
import Loading from './Loading/Loading';    
//import { selectIsRefreshing } from '../redux/auth/authSelectors';           

const Layout = lazy(() => import('components/Header/Header')); 
const HomePage = lazy(() => import('pages/HomePage'));   
const RegisterPage = lazy(() => import('pages/RegisterPage'));  
const LoginPage = lazy(() => import('pages/LoginPage')); 
const ContactsPage = lazy(() => import('pages/ContactsPage')); 
 
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]); 

  return ( 
    <> 
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} /> 
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}