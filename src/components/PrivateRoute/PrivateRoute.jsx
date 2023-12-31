import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAccessToken } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAccessToken = useSelector(selectAccessToken);
  return isAccessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
