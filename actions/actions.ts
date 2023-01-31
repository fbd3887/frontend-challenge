import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormValues = {
  name: string;
  email: string;
  message: string;
};

export type FormState = {
  values: FormValues[];
};

const initialState: FormState = {
  values: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitValues: (state, action: PayloadAction<FormValues>) => {
      state.values = [...state.values, action.payload];
    },
  },
});

export const { submitValues } = formSlice.actions;

export default formSlice.reducer;
