import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './reducer/PostReducer';

const store = configureStore({
    reducer: {
        post: PostReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    ])
})

export default store