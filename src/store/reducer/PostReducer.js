import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PostReducer = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        title: '',
        content: '',
        errmsg: '',
    },
    reducers: {
        updateTitle(state, action) {
            state.title = action.payload
            state.errmsg = ''
        },
        updateContent(state, action) {
            state.content = action.payload
            state.errmsg = ''
        },
        addError(state, action) {
            state.errmsg = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const {
    updateTitle,
    updateContent,
    addError
} = PostReducer.actions;

export default PostReducer.reducer