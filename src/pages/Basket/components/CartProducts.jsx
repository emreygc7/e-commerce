import { useProduct } from "../../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import Payment from "./Payment"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiArrowBack } from "react-icons/bi"
import { FaRegTimesCircle } from 'react-icons/fa'
import style from './cartproducts.module.css'

const CartProducts = () => {

    const { cart, setCart, totalPrice, setTotalPrice } = useProduct()
    
    const navigate = useNavigate()

    const decreaseProduct = (cartItem) => {

        const decreaseQuantityValue = cart.map(updatingItem => {
            if(updatingItem == cartItem){
                if(updatingItem.quantity < 2){
                    return {...updatingItem, quantity: 1} 
                }else{
                    setTotalPrice(totalPrice - cartItem.price)
                    return {...updatingItem, quantity: cartItem.quantity - 1}
                }
            }else{
                return updatingItem
            }
        })

        setCart(decreaseQuantityValue)

    }

    const increaseProduct = (cartItem) => {

        const increaseQuantityValue = cart.map(updatingItem => {
            return updatingItem == cartItem ? {...updatingItem, quantity: cartItem.quantity + 1} : updatingItem
        })
        
        setCart(increaseQuantityValue)
        setTotalPrice(totalPrice + cartItem.price)

    }

    const removeProduct = (cartItem) => {

        const deletedProduct = cart.filter(d=> d !== cartItem)
        
        setCart([...deletedProduct])
        setTotalPrice(totalPrice - (cartItem.quantity * cartItem.price))
    }

  return (
    <>
       <div className={style.goBackContainer}>
            <div className={style.goBack} onClick={() => navigate(-1)}>
                 <BiArrowBack size={24}/> 
            </div>
            <span>Back to previous page</span>
        </div>
        <div className={style.cartContainer}>
            <div className={style.boxes}>
                <h1>My Cart</h1>
                {
                    cart && (
                        cart.map(cartItem => (
                            <div className={style.itemBox} key={cartItem.id}>
                                <img src={cartItem.images[0]} alt="" />
                                <div className={style.productDetails}>
                                    <h2>{cartItem.title}</h2>
                                    <span>{cartItem.brand}</span>
                                    <p>{cartItem.description}</p>
                                    <h1>${cartItem.price}</h1>
                                </div>
                                <div className={style.quantity}>
                                    <AiOutlineMinusCircle 
                                        size={24} 
                                        onClick={() => decreaseProduct(cartItem)}
                                        cursor={"pointer"} 
                                    />
                                    <p>{cartItem.quantity}</p>
                                    <AiOutlinePlusCircle 
                                        size={24} 
                                        onClick={() => increaseProduct(cartItem)}
                                        cursor={"pointer"} 
                                    />
                                </div>
                                <div className={style.timesCircle}>
                                    <FaRegTimesCircle 
                                        size={24} 
                                        onClick={() => removeProduct(cartItem)}
                                        cursor={"pointer"}
                                    />
                                </div>
                            </div>
                        ))
                    ) 
                }
            </div>
            <Payment />
        </div>
    </>
  )
}

export default CartProducts