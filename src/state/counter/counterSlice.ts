import {createSlice} from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // createSlice makes copy of the state under the hood and this code is immutable
            state.value += 1;
        }
    }
});

export default counterSlice.reducer;
