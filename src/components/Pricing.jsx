import { pricing } from "../data/data";
import PlanList from "./PlanList";


const Pricing = () => {
    const {icon, title, plans} = pricing;

    return (
        <>
            <section className="pb-20 md:pb-28 lg:pb-[180px]">
                {/* section title */}
                <div data-aos="fade-up" data-aos-offset="200" data-aos-delay='200' className="flex items-center justify-center -space-x-20 mb-[50px] lg:mb-20 differ max-w-[540px] mx-auto px-4 lg:px-0">
                    <img src={icon} alt="pricing_icon" />
                    <h2 className="text-3xl leading-10 lg:text-5xl lg:leading-[50px] font-extrabold differ flex -space-x-4">
                        {title}
                        <span className="text-primary-200">.</span>
                    </h2>
                </div>

                {/* plan list */}
                <PlanList plans={plans}/>
            </section>
        </>
    );
};

export default Pricing;