import { configureStore } from '@reduxjs/toolkit'
import bookReducer from "./reducer"

export default configureStore({
  reducer: {
    books: bookReducer,
  }
})