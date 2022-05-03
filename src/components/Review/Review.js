import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';


const Review = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('https://sheltered-stream-56750.herokuapp.com/partners')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div id="reviews" className="my-5 text-white">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-center display-1 mt-5 pt-5">Award, nominees & Featured</h1>
                </div>
                <div className="row d-flex  mb-5 pb-5">
                    <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                    >
                        {
                            reviews.map(review => {
                                return (
                                    <SwiperSlide >
                                        <ReviewInfo review={review} key={review.name} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Review;