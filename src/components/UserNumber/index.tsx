import { useNavigate } from 'react-router-dom';
import * as C from './styles';

const UserNumber: React.FC = (props) => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.NumberContainer onClick={() => navigate('/repos')}>
        <h1>{props.repos}</h1>
        <h2>Repositórios</h2>
      </C.NumberContainer>

      <C.NumberContainer onClick={() => navigate('/repos')}>
        <h1>{props.followers}</h1>
        <h2>Seguidores</h2>
      </C.NumberContainer>

      <C.NumberContainer onClick={() => navigate('/repos')}>
        <h1>{props.following}</h1>
        <h2>Seguindo</h2>
      </C.NumberContainer>
    </C.Container >
  )
}

export default UserNumber;