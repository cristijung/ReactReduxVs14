//importa a função de slice do redux
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

//criando o slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { //primeiro reducer
            state.value += 1;
        },
        decrement: (state) => { //segundo reducer
            state.value -= 1;
        },
    },
});

//exporta os reducers que são as funções puras de ação que serão 
//despachadas por meio do evento do user
export const { increment, decrement } = counterSlice.actions;
//exporta o reducer q vai ser responsável por lidar com as ações disparadas
//élos eventos e atualiza o estado do componente
export default counterSlice.reducer;
