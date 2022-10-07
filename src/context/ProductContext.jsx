import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const productContext = createContext()

const ProductContextProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState()
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    

    const getAllProducts = async () => {
        const baseURL = "https://dummyjson.com/products?limit=8"
        const response = await axios.get(baseURL)
        const data = response.data.products
        setAllProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    },[])

 
    const productsData = {
        allProducts,
        setAllProducts,
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
    }

  return (
    <productContext.Provider value={productsData}>
        { children }
    </productContext.Provider>
  )
}

export const useProduct = () => {
    const context = useContext(productContext)
    return context;
}

export default ProductContextProvider