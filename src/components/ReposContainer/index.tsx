import * as C from './styles';

const ReposContainer: React.FC = (props) => {
  return (
    <C.Section>
      <C.Title>Repositórios de {(props.name)?.split(' ')[0]}</C.Title>
      <C.ListOfReposContainer>
        {(props?.repos).map(repo => (
          <C.Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
          </C.Repo>
        ))}
      </C.ListOfReposContainer>
    </C.Section>
  );
}

export default ReposContainer;