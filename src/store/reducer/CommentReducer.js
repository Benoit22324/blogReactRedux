import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
    'comment/fetchComments',
    async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        return response.data
    }
)
export const addComment = createAsyncThunk(
    'comment/addComment',
    async (data) => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/comments`, data)
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
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.comments.push(action.payload)
            state.statut = 'idle'
            state.content = ''
        })
        builder.addCase(fetchComments.pending, (state, action) => {
            state.statut = 'searching'
            state.loading = 'Searching for comment'
        })
        builder.addCase(addComment.pending, (state, action) => {
            state.statut = 'adding'
            state.loading = 'Adding Comment'
        })
    }
})

export const {
    updateComment
} = CommentReducer.actions;

export default CommentReducer.reducer