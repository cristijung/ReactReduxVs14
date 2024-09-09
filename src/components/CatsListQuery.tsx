import { useGetAllCatsQuery } from "../services/catsApi";


export default function CatListQuery() {
    const { data, isLoading, isError, error } = useGetAllCatsQuery();
    if (isLoading) return <div>Carregando ...</div>
    if (isError) return <div>Erro ao buscar cats: {(error as any)?.message || 'Erro desconhecido'}</div>
    
    return(
        <>
        <ul>
            {data?.map((cat) => (
                <li key={cat.id}>
                    <img src={cat.url} alt="gatos"/>
                </li>
            ))}
        </ul>
        
        </>
    );
}