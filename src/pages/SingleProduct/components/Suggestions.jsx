import { useProduct } from "../../../context/ProductContext"
import { Link } from 'react-router-dom'
import reviewStar from '../../../assets/images/reviewstar.png'
import style from './suggestions.module.css'

const Suggestions = () => {
    
    const { allProducts } = useProduct()

  return (
    <section className={style.suggestionsContainer}>
        <h2>Smiliar sponsored items</h2>
        <div className={style.boxes}>
            {
                allProducts?.map(sugItem => (
                    <Link to={`/product/${sugItem.id}`} key={sugItem.id} >
                        <div className={style.box}>
                            <img src={sugItem.images[0]} alt="" className={style.productImg} />
                            <p>{sugItem.title}</p>
                            <span>{sugItem.brand}</span>
                            <div className={style.priceContainer}>
                                <h2>{sugItem.price}$</h2>
                                <div>
                                    <img src={reviewStar} alt="" />
                                    <p>{sugItem.rating.toFixed(1)}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default Suggestions