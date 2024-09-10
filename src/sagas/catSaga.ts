// Importação de efeitos (effects) do Redux Saga 
//que permitem realizar chamadas assíncronas, despachar ações e escutar ações,
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
//estas são as ações definidas no arquivo catActions 
//para representar o sucesso, a falha e a requisição de busca de um gato, respectivamente.
import { 
  fetchCatSuccess, 
  fetchCatFailure,
  FETCH_CAT_REQUEST 
} from '../actions/catActions';
import { StrictEffect } from 'redux-saga/effects'; //tipagem dos efeitos do Saga

//função geradora
function* fetchCat(): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(axios.get, 'https://api.thecatapi.com/v1/images/search');
    yield put(fetchCatSuccess(response.data[0])); 
  } catch (error) {
    if (error instanceof Error) { //verifica se 'error' é uma instância de Error ...
      const errorMessage = error.message; 
      yield put(fetchCatFailure(errorMessage));
    } else {
      //tratara os outros tipos de erros, se necessário
      yield put(fetchCatFailure('Ocorreu um erro desconhecido.'));
    }
  }
}

//outra função geradora
function* catSaga(): Generator<StrictEffect, void, any> {
  yield takeLatest(FETCH_CAT_REQUEST, fetchCat);
}

export default catSaga;

