// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};