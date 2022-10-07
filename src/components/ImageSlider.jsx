import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import style from '../assets/styles/imageslider.module.css'

const ImageSlider = ({ imageArray }) => {

  const [currentImage, setCurrentImage] = useState(0)

  const slicedArray = imageArray.slice(0,3)
  const length = slicedArray.length

 
  const previousImage = () => {
     currentImage == 0 ? setCurrentImage(length - 1) : setCurrentImage(currentImage - 1)
  }
  
  const nextImage = () => {
    currentImage == length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
  }


  return (
    <div className={style.sliderContainer}>
        <img src={imageArray[currentImage]} alt="" className={style.mainImage} />
        <div className={style.controlsContainer}>
            <div onClick={previousImage} className={style.controls}>
                <AiOutlineArrowLeft size={24}/>
            </div>
            {
                slicedArray.map((img,index) => (
                    <img src={img} className={style.smallImages} key={index} onClick={() => setCurrentImage(index)}/>
                ))
            }
            <div onClick={nextImage} className={style.controls}>
                <AiOutlineArrowRight size={24}/>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider