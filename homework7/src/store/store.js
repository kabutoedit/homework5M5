import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './postsSlice.js'

const store = configureStore({
	reducer: {
		posts: postsSlice,
		deleteId: postsSlice,
	},
})

export default store
