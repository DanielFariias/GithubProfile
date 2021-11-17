import { useContext } from 'react';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { UserContainer } from '../components/UserContainer';
import UserDetails from '../components/UserDetails';
import UserNumber from '../components/UserNumber';
import { UserPicture } from '../components/UserPicture';
import { UserContext } from '../context/userContext';

const Home: React.FC = () => {
  const { userData } = useContext(UserContext)
  return (
    <Container>
      <Header />
      <UserContainer>
        {userData?.name ?
          <>
            <UserPicture url={userData.avatar_url} alternativeText={userData.login} />
            <UserDetails name={userData.name} login={userData.login} bio={userData.bio} />
            <UserNumber repos={userData.public_repos} followers={userData.followers} following={userData.following} />
          </>
          : undefined}
      </UserContainer>
    </Container>
  );
}

export default Home;