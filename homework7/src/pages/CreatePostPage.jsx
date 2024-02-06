import React from 'react'

export const CreatePostPage = () => {
	const handleClick = () => {
		const request = async () => {
			const response = await axios.get(`https://dummyjson.com/posts/add`)
			setPosts(response.data.posts)
		}
		request()

	}

	return (
		<>
			<h2>Enter post data</h2>
			<div>
				<input type='text' placeholder='Title' />
				<input type='text' placeholder='Body' />
				<button type='button ' onClick={handleClick}>
					enter
				</button>
			</div>
		</>
	)
}
