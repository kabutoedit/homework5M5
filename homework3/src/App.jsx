import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/postsPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {

  return (
    <>
      <NavBar/>
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                  <Route path={"/homePage"} element={<HomePage/>}/>
                  <Route path={"/postPage/"} element={<PostsPage/>}/>
              </Route>
          </Routes>
    </>
  )
}

export default App
