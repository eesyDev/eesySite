import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    servicesData: null,
    loading: false,
    error: null,
  };


export const fetchServices = createAsyncThunk(
    'services/fetchServices', 
    async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/services/`);
        return response.data;
      }
)

export const servicesSlice = createSlice({
    name: 'services',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchServices.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchServices.fulfilled, (state, action) => {
            state.servicesData = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(fetchServices.rejected, (state, action) => {
            state.servicesData = null;
            state.loading = false;
            state.error = action.error;
          });
      },
})

export default servicesSlice.reducer;