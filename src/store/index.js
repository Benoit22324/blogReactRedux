import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './reducer/PostReducer';
import CommentReducer from './reducer/CommentReducer';
import UsersReducer from './reducer/UsersReducer';

const store = configureStore({
    reducer: {
        post: PostReducer,
        comment: CommentReducer,
        users: UsersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    ])
})

export default store