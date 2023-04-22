import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import projectsReducer from './slices/project_slice';
import servicesReducer from './slices/services_slice';
import packagesReducer from './slices/package_slice';
import socialsReducer from './slices/social_slice';


const store = configureStore({
    reducer: {
      projects: projectsReducer,
      services: servicesReducer,
      packages: packagesReducer,
      socials: socialsReducer,
    },
  });
  
  export default store;