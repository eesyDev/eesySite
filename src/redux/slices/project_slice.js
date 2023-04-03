import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    projectsData: null,
    loading: false,
    error: null,
  };

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects', 
    async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/projects/`);
        return response.data;
      }
)

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchProjects.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProjects.fulfilled, (state, action) => {
            state.projectsData = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(fetchProjects.rejected, (state, action) => {
            state.projectsData = null;
            state.loading = false;
            state.error = action.error;
          });
      },
})

export default projectsSlice.reducer;