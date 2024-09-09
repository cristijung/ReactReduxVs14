
import { all, fork } from 'redux-saga/effects';
import catSaga from './catSaga'; // Importe outras sagas que você criar

function* rootSaga() {
    yield all([
        fork(catSaga), // Adicione outras sagas aqui
    ]);
}

export default rootSaga;