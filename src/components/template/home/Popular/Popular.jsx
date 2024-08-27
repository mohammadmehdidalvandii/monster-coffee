    import Title from '../../../modules/Title/Title';
    import './Popular.css';

    import { Swiper, SwiperSlide } from 'swiper/react';
    // Import Swiper styles
    import 'swiper/css'

    import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard'
    import { Link } from 'react-router-dom';


    function Popular({coffees}) {

        const coffeesPopular = coffees.filter(coffee=> coffee.popular === true);

    return (
        <section className="popular">
            <div className="containers">
                <div className="row">
                    <div className="col-12">
                        <Title title='محبوب ترین ها'/>
                    </div>
                </div>
                <div className="row mt-2">
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
            {coffeesPopular.map(coffee=>(
            <SwiperSlide key={coffee.id}>
                <CoffeeCard
                    {...coffee}
                    price={coffee.sizes.find(size=> size.size === "کوچیک").price}
                />
            </SwiperSlide>
            ))}
            <SwiperSlide>
                <Link to='/' className='popular_showMore'>مشاهده بیشتر</Link>
            </SwiperSlide>
        </Swiper>
                </div>
            </div>
        </section>
    )
    }

    export default Popular