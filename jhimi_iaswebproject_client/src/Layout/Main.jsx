import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../pages/Share/Header';
import Footer from '../pages/Share/Footer';
import { useEffect } from 'react';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin-login or user-login is true in localStorage
    const isAdminLoggedIn = localStorage.getItem('admin-login') === 'true';
    const isUserLoggedIn = localStorage.getItem('user-login') === 'true';

    // If either admin or user is logged in, redirect to home page
    if (isAdminLoggedIn || isUserLoggedIn) {
      navigate('/');
    } else {
      // If neither admin nor user is logged in, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
