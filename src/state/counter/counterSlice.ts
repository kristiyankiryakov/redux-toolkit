import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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
        // createSlice makes copy of the state under the hood and this code is immutable
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("Incrent request is pending...");
        })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            })
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        // simulates async req
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
