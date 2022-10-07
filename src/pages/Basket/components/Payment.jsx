import { useProduct } from "../../../context/ProductContext"
import paymentLogo from '../../../assets/images/Payment.png'
import style from './payment.module.css'

const Payment = () => {

    const { totalPrice } = useProduct()

  return (
    <div className={style.paymentContainer}>
        <h1>Total</h1>
        <hr />
        <div className={style.price}>
            <h3>Sub-total</h3>
            <p>${totalPrice}</p>
        </div>
        <div className={style.delivery}>
            <h3>Delivery</h3>
            <p>Free</p>
        </div>
        <button className={style.paymentBtn} onClick={() => alert(":)")}>Pay now</button>
        <h3>We Accept:</h3>
        <img src={paymentLogo} alt="" />
    </div>
  )
}

export default Payment