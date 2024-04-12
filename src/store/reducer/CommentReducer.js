import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
    'comment/fetchComments',
    async (data) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${data}`)
        return response.data
    }
)

const CommentReducer = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        content: '',
        statut: 'idle',
        loading: '',
    },
    reducers: {
        updateComment(state, action) {
            state.content = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
            state.statut = 'idle'
        })
        builder.addCase(fetchComments.pending, (state, action) => {
            state.statut = 'searching'
            state.loading = 'Searching for comment'
        })
    }
})

export const {
    updateComment
} = CommentReducer.actions;

export default CommentReducer.reducer