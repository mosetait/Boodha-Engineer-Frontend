import React from 'react'
import "./Homepage.css"
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel'

const Homepage = () => {

    const logos = [
        "/brandlogo/1.png" , 
        "/brandlogo/2.png" , 
        "/brandlogo/3.png" , 
        "/brandlogo/4.png" , 
        "/brandlogo/5.png" , 
        "/brandlogo/6.png" , 
        "/brandlogo/7.png" , 
        "/brandlogo/8.png" , 
        "/brandlogo/9.png" , 
        "/brandlogo/1.png" , 
        "/brandlogo/2.png" , 
        "/brandlogo/3.png" , 
        "/brandlogo/4.png" , 
        "/brandlogo/5.png" , 
        "/brandlogo/6.png" , 
        "/brandlogo/7.png" , 
        "/brandlogo/8.png" , 
        "/brandlogo/9.png" , 
        "/brandlogo/1.png" , 
        "/brandlogo/2.png" , 
        "/brandlogo/3.png" , 
        "/brandlogo/4.png" , 
        "/brandlogo/5.png" , 
        "/brandlogo/6.png" , 
        "/brandlogo/7.png" , 
        "/brandlogo/8.png" , 
        "/brandlogo/9.png" , 
        "/brandlogo/1.png" , 
        "/brandlogo/2.png" , 
        "/brandlogo/3.png" , 
        "/brandlogo/4.png" , 
        "/brandlogo/5.png" , 
        "/brandlogo/6.png" , 
        "/brandlogo/7.png" , 
        "/brandlogo/8.png" , 
        "/brandlogo/9.png" , 
    ]

  return (

    <div>
        
        {/* coming soon image */}
        <div className='heroImageContainer'>
            <img src="/comingsoon.png" alt="" />
        </div>

        <BrandCarousel logos={logos} />

        Homepage

    </div>
  )
}

export default Homepage