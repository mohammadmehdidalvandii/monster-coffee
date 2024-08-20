import { Link } from 'react-router-dom';
import Title from '../../../modules/Title/Title';
import './Suggestion.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css'

import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard'

function Suggestion() {
  return (
    <section className="suggestion">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title='پیشنهاده ویژه'/>
                </div>
            </div>
            <div className="row mt-3">
                <Swiper
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
            992:{
                slidesPerView:5,
                spaceBetween:30 
                 },
            768:{
                slidesPerView:4,
                spaceBetween:30 
                 },
            576:{
                slidesPerView:3,
                spaceBetween:30 
                 },
            420:{
                slidesPerView:2,
                spaceBetween:30 
                 },
                 320:{
                    slidesPerView:1,
                    spaceBetween:30 
                      }
        }}
      >
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <CoffeeCard/>
        </SwiperSlide>
        <SwiperSlide>
            <Link to='/' className='suggestion_showMore'>مشاهده بیشتر</Link>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Suggestion