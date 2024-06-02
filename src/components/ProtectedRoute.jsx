import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return auth.currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;