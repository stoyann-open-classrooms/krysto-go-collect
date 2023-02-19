import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import messageService from './messageService'


const initialState = {
    messages: [],
    message: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}



export const ticketSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

    }


})





export const {reset} = ticketSlice.actions
export default ticketSlice.reducer