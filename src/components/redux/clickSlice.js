import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
    name: "click",
    initialState: { value: 0 },
    reducers: {
        update(state) {
            state.value += 1
        }
    },
});

export const { update } = clickSlice.actions;