import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterSlice from '../slice/counterSlice';
import todoSlice from '../slice/todoSlice';
import catSlice from '../slice/catSlice';
import { catsApi } from '../services/catsApi';
import rootSaga from '../sagas/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice,
        cats: catSlice,
        [catsApi.reducerPath]: catsApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(catsApi.middleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga); 

// Definição do tipo RootState
export type RootState = ReturnType<typeof store.getState>;

// Definição do tipo AppDispatch
export type AppDispatch = typeof store.dispatch;