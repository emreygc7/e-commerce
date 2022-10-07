import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";

const PublicRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes