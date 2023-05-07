import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

import { fetchStatusHistory } from './courierThunks';
import { CourierTruckStatus, StatusHistory } from "../../interfaces";

interface CourierState {
    statusHistory: StatusHistory[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CourierState = {
    statusHistory: [],
    isLoading: false,
    error: null,
};

export const courierSlice = createSlice({
    name: 'courier',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStatusHistory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchStatusHistory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.statusHistory = action.payload;
            })
            .addCase(fetchStatusHistory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});
