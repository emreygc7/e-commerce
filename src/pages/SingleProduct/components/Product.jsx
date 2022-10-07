import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DynamicStar } from 'react-dynamic-star';
import { useProduct } from '../../../context/ProductContext'
import toast, { Toaster } from 'react-hot-toast';
import ImageSlider from '../../../components/ImageSlider'
// Assets
import checkMarkIcon from '../../../assets/images/check-mark.png'
import buyersPic from '../../../assets/images/buyers.png'
import { BiArrowBack } from 'react-icons/bi'
import style from './product.module.css'


const Product = () => {

    const { allProducts, cart, setCart, totalPrice, setTotalPrice } = useProduct()

    const { id } = useParams()

    const addToCart = (item) => {
        
        const isExist = cart.findIndex(id => {
            return id.id == item.id
        })  
        
        if(isExist == 0){
            toast.error(`${item.title} is already in your cart.`)
        }else{
            setCart([{...item, quantity: 1}, ...cart])
            setTotalPrice(totalPrice + item.price)
            toast.success(`${item.title} has been added to the cart.`)
        }
        
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[id])

  return (
    <main className={style.productContainer}>
        <Toaster />
        <div className={style.goBackContainer}>
            <div className={style.goBack}>
                <Link to={"/"}> <BiArrowBack size={24}/> </Link>
            </div>
            <span>Back to previouse page | Listed in category: </span>
        </div>
        <div className={style.hr}></div>
        {
            allProducts?.map(singleItem =>(
                singleItem.id == id ? (
                    <div className={style.productArea} key={singleItem.id}>
                        <ImageSlider imageArray={singleItem.images}/>
                        <div className={style.detailContainer}>
                            <div className={style.titleArea}>
                                <h1>{singleItem.title}</h1>
                                <div>
                                    <span>{singleItem.brand}</span>
                                </div>
                            </div>
                            <p>Free 2 Days Shipping | 1 Year Warranty</p>
                            <div className={style.rating}>
                                <DynamicStar 
                                rating={singleItem.rating.toFixed(1)} 
                                totalStars={5} 
                                emptyStarColor={"#C4C4C4"} 
                                width={32} 
                                height={32} 
                                sharpnessStar={1.8} 
                                fullStarColor ={"#F2C94C"}/>
                                <b>{singleItem.rating.toFixed(1)}</b>
                                <p>from 392 Reviews</p>
                            </div>
                            <h1 className={style.price}><sup>$</sup>{singleItem.price}</h1>
                            <div className={style.promisesContainer}>
                                <div className={style.promises}>
                                    <img src={checkMarkIcon} alt="" />
                                    <span>Free Return</span>
                                </div>
                                <div className={style.promises}>
                                    <img src={checkMarkIcon} alt="" />
                                    <span>Chat with us 24 hours</span>
                                </div>
                                <div className={style.promises}>
                                    <img src={checkMarkIcon} alt="" />
                                    <span>Comes with a Package</span>
                                </div>
                            </div>
                            <div className={style.buyers}>
                                <img src={buyersPic} alt="" />
                                <span>1,241 Sold in the last 24 hours</span>
                            </div>
                            <div className={style.buttonsContainer}>
                                <button className={style.buttons} id={style.buyNowBtn}>Buy it now</button>
                                <button className={style.buttons} id={style.addCartBtn} onClick={() => addToCart(singleItem)} data-testid="addtocart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ) : null
            )) 
        }
       
    </main>
  )
}

export default Product