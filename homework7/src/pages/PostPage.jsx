import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../store/postsSlice'

const PostPage = () => {
	const { posts } = useSelector(state => state.posts)
	
	const dispatch = useDispatch()

	const handleDelete = id => {
		dispatch(deletePost(id))
	}


	console.log(posts)

	return (
		<div>
			<h2>Posts</h2>

			{posts ? (
				posts.map(item => (
					<ul key={item.id}>
						<li>{item.title}</li>
						<li>{item.id}</li>
						<button onClick={() => handleDelete(item.id)}>Delete</button>
					</ul>
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}

export default PostPage
