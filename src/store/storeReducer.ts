
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import todoSlice from "../slice/todoSlice";
import catSlice from "../slice/catSlice";
import { catsApi } from "../services/catsApi";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice,
        cats: catSlice,
        [catsApi.reducerPath]: catsApi.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catsApi.middleware), 
    });


//define um tipo estado raiz, inicial na aplicação
//ele usa o retorno do tipo da função store.getState
//recebe sempre o estado inicial da aplicação
export type RootState = ReturnType<typeof store.getState>;
//esta exportação é usada para despachar as ações para a store
//e depois atualizar o estado do componente
//e depois re-renderizar o component na view
export type AppDispatch = typeof store.dispatch;