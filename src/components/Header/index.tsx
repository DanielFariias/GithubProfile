import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { UserContext } from '../../context/userContext';
import api from '../../services/github';
import * as C from './styles';

export const Header: React.FC = () => {
  const [searchedValues, setSearchedValues] = useState('')
  const { setUserdata, setUserRepos } = useContext(UserContext)

  const getUserData = () => {
    api.get(`/${searchedValues}`)
      .then(res => setUserdata(res.data))

    api.get(`/${searchedValues}/repos`)
      .then(res => setUserRepos(res.data))
  }

  return (
    <C.HeaderSection>
      <C.HeaderTitle>Github Profile</C.HeaderTitle>
      <C.HeaderInputContainer>
        <C.HeaderInput
          value={searchedValues}
          onChange={(e) => setSearchedValues(e.target.value)}
        />
        <C.HeaderSearchButton onClick={getUserData}>
          <FiSearch size={15} />
        </C.HeaderSearchButton>
      </C.HeaderInputContainer>
    </C.HeaderSection>
  )
}