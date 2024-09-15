// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const CommunitySlider = ({testimonials}) => {


    return (
        <>
            <Swiper
             slidesPerView={1}
             spaceBetween={32}
             centeredSlides={'auto'}
             grabCursor={true}
             modules={[]}
             className='overflow-hidden'
             breakpoints={{
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
              }}
            >
                {testimonials?.map((testimonial, i)=>{
                    //destructuring testimonial
                    const { image, name, message } = testimonial;

                    return(
                        <>
                          <SwiperSlide key={i.toString()}  className="max-w-[320px]  relative overflow-hidden">
                            <div className="relative h-full">
                                {/* image */}
                                <div className='h-full'>
                                   <img src={image} alt="slide_image" />
                                </div>
                                {/* message & name */}
                                <div className='absolute bottom-[30px] text-white p-[20px] text-center'>
                                    <div className='mb-8 italic text-lg font-light'>
                                        {message}
                                    </div>
                                   <div className='flex items-center justify-center gap-[3px]'>
                                      <span className='text-[30px] text-primary-200 font-bold'>~</span>
                                      <div className='text-[20px] font-bold'>{name}</div>
                                   </div>
                                </div>
                            </div>
                          </SwiperSlide>
                        </>
                    )
                })
                }
            </Swiper>
        </>
    );
};

export default CommunitySlider;