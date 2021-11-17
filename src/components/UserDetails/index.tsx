import * as C from './styles';

const UserDetails: React.FC = (props) => {
  return (
    <C.Container>
      <C.Name>{props.name}</C.Name>
      <C.Username>{props.login}</C.Username>
      <C.Description>{props?.bio}</C.Description>
    </C.Container>
  )
}

export default UserDetails;