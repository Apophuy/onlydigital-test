import cn from 'classnames';
import { gsap } from 'gsap';
import { FC, useEffect, useRef, useState } from 'react';

import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

import { Fields, TEvent } from '../../types';

import { fields2Ru } from '../../utils/constants';
import Event from '../Event';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import RoundedButton from '../RoundedButton';

type Props = {
  events: TEvent[];
  isMobile: boolean;
  field: Fields;
};

const Slider: FC<Props> = ({ events, isMobile, field }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const swiperRef = useRef<SwiperType>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateIndex = (swiper: SwiperType): void => {
    if (!swiper) return;
    setCurrentIdx(swiper.activeIndex);
  };

  const slidesPerView = isMobile ? 2 : 3;

  useEffect(() => {
    if (sliderRef.current) {
      gsap
        .timeline()
        .to(sliderRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0.9,
          ease: 'power1.inOut',
        })
        .to(sliderRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power1.inOut',
        });
    }
  }, [events]);

  return (
    <div className={styles.slider} ref={sliderRef}>
      {isMobile && <h3 className={styles.field}>{fields2Ru[field]}</h3>}
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
