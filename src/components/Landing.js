import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Hero from './landingPageComonents/Hero'
import Whatwedo from './landingPageComonents/Whatwedo'
import Ourproducts from './landingPageComonents/Ourproducts'
import Testimonial from './landingPageComonents/Testimonials'
import Howwedo from './landingPageComonents/Howwedo';



export default function Landing() {
    useEffect(() => {
        AOS.init({duration:1000});
      }, []);
    return (
        <div>
            <Hero/>
            <Whatwedo/>
            <Ourproducts/>
            <Howwedo/>
            <Testimonial/>
        </div>
    )
}
