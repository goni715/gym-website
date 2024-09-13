import { banner } from "../data/data";

const Banner = () => {
    const {titlePart1, titlePart2, subtitle, textBtn, img} = banner;
    return (
        <>
           <section className="bg-neutral-500 h-[790px]">
             <div className="container lg:px-[7rem] h-full">
                <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24 pl-6 lg:pl-0">
                    {/* text */}
                    <div className="text-white flex-1 z-10">
                        <h1 data-aos="fade-down" data-aos-delay="500" className="text-[40px] leading-10 lg:text-6xl lg:leading-[62px] font-extrabold differ text-white mb-8">
                            {titlePart1}
                            <br/>
                            <span className="text-primary-200">{titlePart2}</span>
                        </h1>
                        <p data-aos="fade-down" data-aos-delay="600" className="max-w-[415px] text-body-md lg:text-body-lg mb-8">{subtitle}</p>
                        <button data-aos="fade-down" data-aos-delay="700" className="flex justify-center items-center rounded-[1px] font-primary font-bold uppercase text-[12px] lg:text-[14px] leading-[18px] h-[42px] lg:h-[46px] px-[30px] lg:px-[40px] tracking-[1px] bg-white text-neutral-500 hover:bg-white/90 transition">
                            {textBtn}
                        </button>
                    </div>

                    {/* image- using as background-image */}
                    <div data-aos="fade-right" data-aos-delay="900" className="w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1">
                    </div>
                </div>
             </div>
           </section>
        </>
    );
};

export default Banner;