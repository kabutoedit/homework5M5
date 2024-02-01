import './App.css'
import { Route,Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {

  return (
      <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/posts' element={<PostsPage/>}/>
                <Route path='*' element={<h3>Страница не найдена</h3>}/>
            </Route>
        </Routes>
      </>
  )
}

export default App
