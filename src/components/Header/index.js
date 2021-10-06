import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(`/${path}`);
  };
  return (
    <HeaderContainer>
      <button onClick={() => handleClick('')}>Home</button>
      <button onClick={() => handleClick('wedding')}>Wedding</button>
      <button onClick={() => handleClick('confraternization')}>
        Confraternization
      </button>
      <button onClick={() => handleClick('graduation')}>Graduation</button>
    </HeaderContainer>
  );
};

export default Header;
