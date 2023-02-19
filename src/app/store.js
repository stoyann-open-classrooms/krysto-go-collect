import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import collectReducer from '../features/collect/collectSlice'
import userReducer from '../features/user/userSlice'
import messageReducer from '../features/message/messageSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collect: collectReducer,
    user: userReducer,
    message: messageReducer
  },
});
