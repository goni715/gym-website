import { workouts } from '../data/data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../workoutSlider.css'


const WorkoutSlider = () => {
     //destructure workouts data
     const {programs} = workouts;

    return (
        <>
            <Swiper 
              slidesPerView={2}
              spaceBetween={32}
              navigation={true}
              breakpoints={{
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
              }}
              modules={[Navigation]}
              className='workoutSlider'
            >
                {programs?.map((program, i)=>(
                    <SwiperSlide key={i.toString()} className="max-w-[320px] max-h-[320px] relative">
                        <img className="w-full h-full object-cover" src={program.image} alt="slider_img" />
                        <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]">
                            <div className='font-primary font-semibold text-sm text-neutral-500'>
                                {program.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    );
};

export default WorkoutSlider;