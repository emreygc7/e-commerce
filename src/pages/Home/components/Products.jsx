import arrow from '../../../assets/images/arrow-right.png'
import { useProduct } from "../../../context/ProductContext"
import { Link } from 'react-router-dom'
import style from './products.module.css'

const Products = () => {

  const { allProducts } = useProduct()

  return (
    <section className={style.productsSection} id="products">
      <h1 id={style.title}>Products</h1>
      <div className={style.categoriesContainer}>
        <a href="#">All</a>
        <a href="#">Chair</a>
        <a href="#">Table</a>
        <a href="#">Bed</a>
        <a href="#">Closet</a>
        <a href="#">Sofa</a>
        <a href="#">Cabinet</a>
      </div>
      <div className={style.productsArea}>
        {
          allProducts ? (
              allProducts.map(singleProduct => (
                <Link key={singleProduct.id} to={`product/${singleProduct.id}`}>
                   <div className={style.box} >
                      <img src={singleProduct.images[0]} alt="" className={style.productImage} />
                      <div>
                        <h2>{singleProduct.title}</h2>
                        <div className={style.priceContainer}>
                          <span>${singleProduct.price}</span>
                          <img src={arrow} alt="arrow"/>
                        </div>
                      </div>
                    </div>
                </Link>
              ))
          ) : null
        }
      </div>
    </section>
  )
}

export default Products