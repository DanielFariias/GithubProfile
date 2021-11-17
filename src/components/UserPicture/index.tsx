import * as C from './styles';

export const UserPicture = (props) => {
  return (
    <C.Container>
      <C.ProfilePicture src={props.url} />
    </C.Container>
  )
}