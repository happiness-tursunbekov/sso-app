import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {}
};

export const fetchUser = createAsyncThunk('auth/fetchUser', async token => {
    if (token) {
        axios.defaults.headers['Authorization'] = token
    }

    const response = await axios.get('/api/auth/user')
    return response.data
})

export const signOut = createAsyncThunk('auth/signOut', async () => {
    localStorage.removeItem('token')
    const response = await axios.post('/api/auth/sign-out')
    return response.data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            // Add user to the state array
            state.user = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(signOut.fulfilled, (state, action) => {
            // Add user to the state array
            state.user = {}
        })
    },
});
export default authSlice.reducer;
export const auth = (state) => state.auth
