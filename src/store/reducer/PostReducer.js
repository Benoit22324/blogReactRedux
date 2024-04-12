import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'post/fetchPost',
    async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        return response.data
    }
)
export const addPost = createAsyncThunk(
    'post/addPost',
    async (data) => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
        return response.data
    }
)

const PostReducer = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        id: 101,
        title: '',
        content: '',
        errmsg: '',
        statut: 'idle',
        loading: '',
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
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.statut = 'idle'
        })
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.posts.push({...action.payload, id: state.id})
            state.statut = 'idle'
            state.id++
            state.title = ''
            state.content = ''
        })
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.statut = 'searching'
            state.loading = 'Searching Post ...'
        })
        builder.addCase(addPost.pending, (state, action) => {
            state.statut = 'adding'
            state.loading = 'Adding Post ...'
        })
    }
})

export const {
    updateTitle,
    updateContent,
    addError
} = PostReducer.actions;

export default PostReducer.reducer