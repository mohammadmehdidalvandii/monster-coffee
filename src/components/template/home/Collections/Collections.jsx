import { Link } from 'react-router-dom';
import Title from '../../../modules/Title/Title';
import './Collections.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css'

function Collections() {
  return (
    <section className="collections">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title='مجموعه ها'/>
                </div>
            </div>
            <div className="row mt-3">


            <Swiper
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
            992:{
                slidesPerView:5,
                spaceBetween:20 
                 },
            768:{
                slidesPerView:4,
                spaceBetween:20 
                 },
            576:{
                slidesPerView:3,
                spaceBetween:20 
                 },
            420:{
                slidesPerView:2,
                spaceBetween:20 
                 },
                 320:{
                    slidesPerView:1,
                    spaceBetween:30 
                      }
        }}
      >
        <SwiperSlide>
        <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link to='/' className='collections_item'>
                        <img src="/images/suggest.jpg" alt="collection" className="collections_img" />
                        <div className="collections_content">
                            <h6 className="collections_title">آمریکانو</h6>
                            <span className="collections_num">32 محصول</span>
                        </div>
                    </Link>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Collections