import { useProduct } from '../../../context/ProductContext'
import { useParams } from 'react-router-dom'
import style from './about.module.css'

const About = () => {

    const { id } = useParams()

    const { allProducts } = useProduct() 

  return (
    <section className={style.aboutContainer}>
        <div className={style.tabs}>
            <button className={style.active}>About</button>
            <button>Shipping</button>
            <button>Reviews</button>
            <button>Returns</button>
        </div>
        {
            allProducts?.map(singleItem => (
                singleItem.id == id ? (
                    <div key={singleItem.id} className={style.about}>
                        <img src={singleItem.images[0]} alt="" className={style.productImg} />
                        <p>{singleItem.description}</p>
                    </div>
                ) : null
            ))
        }
    </section>
  )
}

export default About