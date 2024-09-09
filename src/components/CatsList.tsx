import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCats } from '../slice/catSlice';
import { RootState, AppDispatch } from '../store/storeReducer';

interface Cat {
  id: string;
  url: string;
}

export default function CatList() {
  const dispatch = useDispatch<AppDispatch>();
  const cats: Cat[] = useSelector((state: RootState) => state.cats.cats);
  const status: 'idle' | 'loading' | 'succeeeded' | 'failed' = useSelector((state: RootState) => state.cats.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCats()); 
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Carregando gatos...</p>;
  } else if (status === 'failed') {
    return <p>Erro ao carregar os gatos.</p>;
  } 

  return (
    <div>
      <h2>Lista de Gatos</h2>
      {cats.map((cat) => (
        <div key={cat.id}>
          <img src={cat.url} alt="Cute cat" />
        </div>
      ))}
    </div>
  );
}