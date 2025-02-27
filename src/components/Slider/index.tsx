import { FC, useRef } from 'react';
import styles from './styles.module.scss';
import { TEvent } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Event from '../Event';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

type Props = {
  events: TEvent[];
  isMobile: boolean;
};

const Slider: FC<Props> = ({ events, isMobile }) => {
  const swiperRef = useRef<SwiperType>(null);
  return (
    <div className={styles.slider}>
      <div className={styles.events}>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={isMobile ? [] : [Navigation]}
          spaceBetween={isMobile ? 25 : 80}
          slidesPerView={isMobile ? 2 : 3}
          navigation={!isMobile}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {events.map((event) => (
            <SwiperSlide key={event.eventId}>
              <Event event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
