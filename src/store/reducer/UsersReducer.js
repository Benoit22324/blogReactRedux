import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response.data
    }
)

const UsersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default UsersReducer.reducer