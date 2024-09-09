import { useGetAllCatsQuery } from '../services/catsApi';

export default function CatsListQuery() {
  const { data, isLoading, isError, error } = useGetAllCatsQuery(); // Desestruture 'error'

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao buscar gatos: {(error as any)?.message || 'Erro desconhecido'}</div>; 

  return (
    <ul>
      {data?.map((cat) => (
        <li key={cat.id}>
          <img src={cat.url} alt="Gato" /> 
        </li>
      ))}
    </ul>
  );
}