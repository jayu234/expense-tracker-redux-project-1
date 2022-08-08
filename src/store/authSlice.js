
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServise from "../apiFeature/api";

const initialState = {
    user: null,
    isLoading: false,
    success: false,
    isError: false,
    message: ''
}

export const userLogin = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            return await authServise.login(user)
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkAPI.rejectWithValue(message)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(userLogin.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        .addCase(userLogin.fulfilled , (state, action) => {
            state.isLoading = false
            state.success = true
            state.user = action.payload
            state.isError = false
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export default authSlice.reducer;

/*
createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/user/login',
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

*/