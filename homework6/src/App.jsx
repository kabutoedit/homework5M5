import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Basket from "./pages/Basket.jsx";

function App() {

  return (
    <>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/productsPage'} element={<ProductsPage/>}/>
                <Route path={'/basketPage'} element={<Basket/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
