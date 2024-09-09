import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatRequest } from '../actions/catActions'; 
import { RootState } from '../store/storeReducer'; 


export default function CatsSagaComponent() {
  const dispatch = useDispatch();
  const { loading, catData, error } = useSelector((state: RootState) => state.cats);

  useEffect(() => {
    dispatch(fetchCatRequest()); 
  }, [dispatch]);

  return (
    <div>
      <h1>Gatos da Cat API</h1>

      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}

      {catData && (
        <div>
          <img src={catData.url} alt="Gato" />
          
        </div>
      )}
    </div>
  );
}