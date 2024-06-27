import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const RouteController = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsAuth(auth === 'yes');
  }, []);

  return isAuth ? <Component {...rest} /> : <Navigate to='/iniciosesion' />;
};

export default RouteController;