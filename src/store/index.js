import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './reducer/PostReducer';
import CommentReducer from './reducer/CommentReducer';

const store = configureStore({
    reducer: {
        post: PostReducer,
        comment: CommentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    ])
})

export default store