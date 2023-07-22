import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    editBook: {}
  },
  reducers: {
    addEditBook: (state, action) => {
      state.editBook = action.payload
    },
    removeEditBook: (state) => {
      state.editBook = {}
    },
  }
})

export const { addEditBook, removeEditBook } = bookSlice.actions

export default bookSlice.reducer