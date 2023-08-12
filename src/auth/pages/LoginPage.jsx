import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login("Argiro");
    navigate(lastPath, {
      replace: true
    });
  };

  return (
    <div className='container mt-5 mb-5 p-5 bg-light rounded-3 shadow-lg border-0 text-center text-dark' style={{ width: '300px' }}>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary'
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
