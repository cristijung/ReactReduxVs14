//importante arquivo que define a configuração do
//sistema do Redux Saga --> é a raiz de tudo
import { all, fork } from 'redux-saga/effects';
import catSaga from './catSaga'; 

function* rootSaga() {
    yield all([
        fork(catSaga), //outras sagas aqui
        // fork(dogSaga),
    ]);
}

export default rootSaga;

