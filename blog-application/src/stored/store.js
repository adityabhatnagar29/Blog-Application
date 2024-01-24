import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../reducer/blogReducer';

const store = configureStore({
    reducer: {
        blogs: blogReducer
    }
});

export default store;
