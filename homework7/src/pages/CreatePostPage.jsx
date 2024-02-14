import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../store/postsSlice'

export const CreatePostPage = () => {
	const dispatch = useDispatch()
	let { posts } = useSelector(state => state.posts.posts)
	const [title, setTitle] = useState('asd')
	const [userId, setUserId] = useState('15')
	const [body, setBody] = useState('asd')

	const handleSubmit = e => {
		e.preventDefault()
		const postData = {
			title: title,
			userId: userId,
			body: body,
		}
		dispatch(createPost(postData))
	}

	const handleCreate = post => {
		console.log(post)
		dispatch(createPost(post))
	}

	return (
		<>
			<h2>Enter post data</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='title'
					name='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>

				<input
					type='text'
					placeholder='body'
					name='body'
					value={body}
					onChange={e => setBody(e.target.value)}
				/>

				<input
					type='number'
					placeholder='userId'
					name='userId'
					value={userId}
					onChange={e => setUserId(e.target.value)}
				/>

				<button type='submit' onClick={handleCreate}>
					enter
				</button>
				<Link to='/PostPage'>Go back to posts</Link>
			</form>
		</>
	)
}
