import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const request = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await axios.get('https://dummyjson.com/posts')
	return await response.data
})

export const deletePost = createAsyncThunk('posts/deletePost', async id => {
	const response = await axios.delete(`https://dummyjson.com/posts/${id}`)
	return response.data
})

export const createPost = createAsyncThunk('posts/createPost', async post => {
	const { title, userId, body } = post
	// console.log('Creating post:', post)
	const response = await axios.post(
		'https://dummyjson.com/posts/add',
		{
			title,
			userId,
			body,
		},
		{ headers: { 'Content-Type': 'application/json' } }
	)
	console.log(response)
	return await response.data
})

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
		deleteId: null,
	},
	reducers: {
		setDeleteId: (state, action) => {
			state.deleteId = action.payload
			post
		},
	},
	extraReducers: builder => {
		builder
			.addCase(request.pending, state => {
				state.loading = true
			})
			.addCase(request.fulfilled, (state, action) => {
				state.loading = false
				state.posts = action.payload.posts
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.posts.push(action.payload)
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.deleteId = action.payload
				state.posts = state.posts.filter(item => item.id !== action.payload.id)
			})
	},
})

export default postsSlice.reducer
