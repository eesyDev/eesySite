import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    packagesData: null,
    loading: false,
    error: null,
  };


export const fetchPackages = createAsyncThunk(
    'packages/fetchPackages', 
    async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/packages/`);
        return response.data;
      }
)

export const packagesSlice = createSlice({
    name: 'packagesSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPackages.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchPackages.fulfilled, (state, action) => {
            state.packagesData = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(fetchPackages.rejected, (state, action) => {
            state.packagesData = null;
            state.loading = false;
            state.error = action.error;
          });
      },
})

export default packagesSlice.reducer;