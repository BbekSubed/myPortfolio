import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Reviews from Clients'
  },
  {
    avatar:AVTR2,
    name:'Tom Cruise',
    review:'Reviews from Clients'
  },
  {
    avatar:AVTR3,
    name:'Bibek',
    review:'Reviews from Clients'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween = {40}
        SlidesPerView ={3}
        pagination = {{clickable: true}}>
         {
          data.map(({avatar, name,review},index)=>{
            return(
              <SwiperSlide key ={index} className ='testimonial'>
              <div className="client__avatar">
                <img src={avatar}  />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
              </SwiperSlide>
            )
          })
         }
      </Swiper>
    </section>
  );
};

export default Testimonials