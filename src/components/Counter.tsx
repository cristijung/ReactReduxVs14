import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/storeReducer';
import { increment, decrement } from '../slice/counterSlice';


export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrementar -</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Incrementar +</button>
      </div>
    </>
  );
}

//useSelector funciona como um seletor de 'slice' que o
//componente deseja consumir
//a partir deste consumo ele envia pelo dispatch a re-renderização
//do componente