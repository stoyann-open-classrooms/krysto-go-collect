import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import collectPointService from './collectPointService'


const initialState = {
    collectPoints: [],
    collectPoint: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Get all collects
export const getCollectPoints = createAsyncThunk(
  'collectPoints/getAll',
  async (_, thunkAPI) => {
    try {
      return await  collectPointService.getCollectPoints()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)
export const getCollectPoint = createAsyncThunk(
  'collectPoints/get',
  async (collectPointId, thunkAPI) => {
    try {
      return await collectPointService.getCollectPoint(collectPointId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const collectPointSlice = createSlice({
  name: 'collectPoint',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getCollectPoints.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCollectPoints.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.collectPoints = action.payload
      })
      .addCase(getCollectPoints.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.collectPoints = null
      })
     
      .addCase(getCollectPoint.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCollectPoint.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.collectPoint = action.payload
      })
      .addCase(getCollectPoint.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.collectPoint = null
      })

  
  },
})

export const { reset } = collectPointSlice.actions
export default collectPointSlice.reducer



