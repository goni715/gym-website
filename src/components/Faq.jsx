import { faq } from "../data/data";
import Accordion from "./Accordion";

const Faq = () => {
    const { icon, title, accordions} = faq;

    return (
        <>
            <section className="pb-20 md:pb-28 lg:pb-[180px] ">
                <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:min-h-[1160px] lg:pt-6">
                    {/* section title*/}
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" className="flex items-center mb-[50px] lg:mb-20 justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0">
                        <img className="lg:hidden" src={icon} alt="faq_icon" />
                        <h2 className="text-3xl leading-10 lg:text-5xl lg:leading-[50px] font-extrabold differ flex -space-x-4 lg:mt-[100px]">
                            {title}
                            <span className="text-primary-200">.</span>
                        </h2>
                    </div>
                    {/* accordion list */}
                    <div className="flex flex-col gap-y-4 px-4" data-aos="fade-up" data-aos-offset="300" data-aos-delay="200">
                    {accordions?.map((accordion, index)=>{
                        return (
                           <Accordion key={index} accordion={accordion}/>
                        )
                    })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;