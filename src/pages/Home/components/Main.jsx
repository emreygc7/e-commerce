// Assets
import arrowPic from '../../../assets/images/Arrow.png'
import roomPic from '../../../assets/images/Room.png'
import searchPic from '../../../assets/images/search-normal.png'
import aboutPic1 from '../../../assets/images/about1.png'
import aboutPic2 from '../../../assets/images/about2.png'
import aboutPic3 from '../../../assets/images/about3.png'
import aboutPic4 from '../../../assets/images/about4.png'
import customerPic from '../../../assets/images/customer.png'
import star from '../../../assets/images/star.png'
import quote from '../../../assets/images/quote.png'
import leftArrow from '../../../assets/images/arrow-circle-left.png'
import rightArrow from '../../../assets/images/arrow-circle-right.png'
import contactPic1 from '../../../assets/images/contact1.png'
import contactPic2 from '../../../assets/images/contact2.png'
import contactPic3 from '../../../assets/images/contact3.png'
import contactPic4 from '../../../assets/images/contact4.png'
import style from './main.module.css'
//Components
import Products from './Products'
import ContactForm from '../../../components/ContactForm'

const Main = () => {
  return (
    <main className={style.mainContainer}>

        <section className={style.topSectionContainer} id="home">
            <div className={style.titleContainer}>
                <h1 className={style.title}>Amazing furniture for your home</h1>
                <span className={style.subtitle}>We think the chair is the most important piece of furniture in your home. Because if you love the chair you are sitting in chances are you will love the rest of the room.</span>
                <img src={arrowPic} alt="" id={style.arrowPic} />
            </div>
            <div className={style.searchArea}>
                <div>
                    <input type="text" placeholder='Search your product' className={style.searchInput} />
                    <img src={searchPic} alt="" />
                </div>
                <img src={roomPic} alt="" />
            </div>
        </section>

        <section className={style.aboutContainer} id="about">
            <div className={style.aboutTop}>
                <h1>About us</h1>
                <span>Comfort is key and how you feel about your chair will affect how you feel and your mood.</span>
            </div>
            <div className={style.aboutBottom}> 
                <div className={style.aboutBoxes}>
                    <div>
                        <div className={style.aboutBox}>
                            <h1>1</h1>
                            <h2>Mission</h2>
                            <span>It makes people at ease and feel like they want to open up.</span>
                        </div>
                        <div className={style.aboutBox}>
                            <h1>3</h1>
                            <h2>Vision</h2>
                            <span>Along with a healthy dose of negative space to give the eyes spots to rest.</span>
                        </div>
                    
                    </div>
                    <div>
                        <div className={style.aboutBox}>
                            <h1>2</h1>
                            <h2>Motivation</h2>
                            <span>The perfect mix of art that complements the room's style.</span>
                        </div>
                        <div className={style.aboutBox}>
                            <h1>4</h1>
                            <h2>Goal</h2>
                            <span>Art that has meaning to the people who live in the space.</span>
                        </div>
                    </div>

                </div>
                <div className={style.aboutImageBoxes}>
                    <div className={style.aboutImageBox} id={style.aboutImageBox1}>
                        <img src={aboutPic1} alt="" />
                        <img src={aboutPic4} alt="" />
                        
                    </div>
                    <div className={style.aboutImageBox}>
                        <img src={aboutPic2} alt="" />
                        <img src={aboutPic3} alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        <Products />
        
        <section className={style.testimonialContainer} id="testimonial">
            <h1 className={style.testimonialTitle}>What do customers say...</h1>
            <div className={style.customerContainer}>
                <div>
                    <img src={customerPic} alt="" />
                    <img src={star} alt="" id={style.starIcon} />
                </div>
                <div className={style.commentContainer}>
                    <img src={quote} alt="" id={style.quote} />
                    <div className={style.commentArea}>
                        <h1>Amazing service</h1>
                        <span>Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers.</span>
                        <div className={style.author}>
                            <b style={{color: "#F66B0E"}}>Wade Warren</b>
                            <span>Doctor</span>
                        </div>
                        <div className={style.arrows}>
                            <img src={leftArrow} alt="" />
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={style.contactContainer} id="contact">
            <div className={style.contactImageBoxes}>
                <div className={style.contactImageBox} id={style.contactImageBox1}>
                    <img src={contactPic1} alt="" />
                    <img src={contactPic4} alt="" />            
                </div>
                <div className={style.contactImageBox}>
                    <img src={contactPic2} alt="" />
                    <img src={contactPic3} alt="" />
                </div>
            </div>
            <ContactForm />
        </section>
    </main>
  )
}

export default Main