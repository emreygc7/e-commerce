import style from '../assets/styles/contactform.module.css'

const ContactForm = () => {
  return (
    <div className={style.formContainer}>
        <h1>Contact us</h1>
        <span>Our team would love to hear from you!</span>
        <form className={style.form} onSubmit={e => e.preventDefault()}>
            <div className={style.nameArea}>
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name'/>
            </div>
            <input type="email" placeholder='Email adress'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className={style.btn}>Send message</button>
        </form>
    </div>
  )
}

export default ContactForm