import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Routes,Route} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage.jsx";
import Layout from "./components/Layout.jsx";
import Info from "./pages/Info.jsx";


function App() {


  return (
    <>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<ProductsPage/>}/>
                <Route path={'/info'} element={<Info/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App

