import { join } from "../data/data";

const Join = () => {
    const { image, title, subtitle, btnText} = join;
    return (
        <>
            <section className="bg-neutral-500 min-h-[537px]">
                <div className="container">
                    {/* image & text wrapper */}
                    <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
                        {/* image  data-aos="fade-right"*/}
                        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="200" className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full">
                            <img src={image} alt="ioin_image" />
                        </div>
                        {/* text */}
                        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" className="max-w-[350px] lg:max-w-[492px] ml-[30px]">
                            <h1 className="text-[40px] leading-10 md:text-6xl lg:leading-[62px] font-extrabold mb-4 lg:mb-6 text-white">
                                Want to join <span className="text-primary-200">&</span> have fun?
                            </h1>
                            <p className="text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">{subtitle}</p>
                            <button className="btn btn-secondary btn-lg">{btnText}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Join;