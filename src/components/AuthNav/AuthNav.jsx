import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { AuthBtnWrapper } from 'components/Styles.styled';

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <AuthBtnWrapper>
      <Button
        size="small"
        variant="outlined"
        onClick={() => navigate('/register')}
      >
        Sign Up
      </Button>
      <Button
        size="small"
        variant="contained"
        endIcon={<LoginIcon />}
        onClick={() => navigate('/login')}
      >
        Log in
      </Button>
    </AuthBtnWrapper>
  );
};
