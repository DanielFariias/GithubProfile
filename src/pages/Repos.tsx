import { useContext } from 'react';
import { Container } from '../components/Container';
import ReposContainer from '../components/ReposContainer';
import { UserContext } from '../context/userContext';

const Repos: React.FC = () => {
  const { userData, userRepos } = useContext(UserContext)

  return (
    <Container>
      <ReposContainer name={userData.name} repos={userRepos} />
    </Container>
  );
}

export default Repos;