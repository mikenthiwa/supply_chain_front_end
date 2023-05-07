import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStatusHistory } from './courierApi';

export const fetchStatusHistory = createAsyncThunk(
    'courier/fetchStatusHistory',
    async (truckName: string, thunkAPI) => {
        try {
            const {response} = await getStatusHistory(truckName);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
