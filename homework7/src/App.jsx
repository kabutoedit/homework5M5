import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Layout } from './components/Layout'
import { CreatePostPage } from './pages/CreatePostPage'
import PostPage from './pages/PostPage'
import { useDispatch } from 'react-redux'
import { request } from './store/postsSlice'
import { useEffect } from 'react'

function App() {
	const dispatch = useDispatch()

	
	useEffect(() => {
		dispatch(request())
	}, [dispatch])
	return (
		<>
			<NavBar />
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route path={'/CreatePostPage'} element={<CreatePostPage />} />
					<Route path={'/PostPage'} element={<PostPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
