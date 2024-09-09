
import { all, fork } from 'redux-saga/effects';
import catSaga from './catSaga'; 

function* rootSaga() {
    yield all([
        fork(catSaga), //outras sagas aqui
    ]);
}

export default rootSaga;

