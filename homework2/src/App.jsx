import {Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from "./components/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import CreatePost from "./components/CreatePost.jsx";
import SinglePost from "./components/SinglePost.jsx";
import Api from "./components/Api.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/posts" element={<Api/>}/>
                        <Route path="/create_post" element={<CreatePost/>}/>
                        <Route path="posts/:postId" element={<SinglePost/>}/>
                        <Route path="*" element={
                            <div>
                                <h2>404</h2>
                                <h3>not found</h3>
                            </div>
                        }>
                        </Route>
                    </Route>
                </Routes>
        </>
)
}

export default App
