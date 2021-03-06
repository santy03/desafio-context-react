import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import CartContextProvider from "../components/CartContext";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='/Cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;