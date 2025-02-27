import { FC, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TEvent } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Event from '../Event';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import RoundedButton from '../RoundedButton';
import cn from 'classnames';

type Props = {
  events: TEvent[];
  isMobile: boolean;
};

const Slider: FC<Props> = ({ events, isMobile }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  const updateIndex = (swiper: SwiperType) => {
    if (!swiper) return;
    setCurrentIdx(swiper.activeIndex);
  };

  const slidesPerView = isMobile ? 2 : 3;

  return (
    <div className={styles.slider}>
      <RoundedButton
        dir='left'
        onClick={() => swiperRef.current?.slidePrev()}
        className={cn(styles.button, { [styles.button__hide]: isMobile || currentIdx === 0 })}
        iconClassName={styles.icon}
      />
      <div className={styles.events}>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={isMobile ? [] : [Navigation]}
          spaceBetween={isMobile ? 25 : 80}
          slidesPerView={slidesPerView}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          onActiveIndexChange={updateIndex}
        >
          {events.map((event) => (
            <SwiperSlide key={event.eventId}>
              <Event event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <RoundedButton
        dir='right'
        onClick={() => swiperRef.current?.slideNext()}
        className={cn(styles.button, {
          [styles.button__hide]: isMobile || currentIdx + slidesPerView === events.length,
        })}
        iconClassName={styles.icon}
      />
    </div>
  );
};

export default Slider;
