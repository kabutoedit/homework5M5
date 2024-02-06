import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Layout } from './components/Layout'
import { CreatePostPage } from './pages/CreatePostPage'

function App() {

  return (
		<>
			<NavBar />
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route path={'/CreatePostPage'} element={<CreatePostPage/>}/>
				</Route>
			</Routes>
		</>
	)
}

export default App
