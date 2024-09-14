import { community } from "../data/data";
import CommunitySlider from "./CommunitySlider";

const Community = () => {

   const {icon, title, testimonials} = community;


    return (
      <>
        <section className="pb-20 md:pb-28 lg:pb-[180px] differ relative">
          <div className="container">
            {/* section title-group */}
            <div
              data-aos="fade-up"
               data-aos-offset="200"
              data-aos-delay="200"
              className="flex items-center justify-center -space-x-20 mb-[50px] lg:mb-20 differ max-w-[540px] mx-auto px-4 lg:px-0"
            >
              <img src={icon} alt="" />
              <h2 className="text-3xl leading-10 lg:text-5xl lg:leading-[50px] font-extrabold differ flex -space-x-4">
                {title}
                <span className="text-primary-200">.</span>
              </h2>
            </div>
            <div  data-aos="fade-left"
               data-aos-offset="200"
              data-aos-delay="200">
              <CommunitySlider testimonials={testimonials} />
            </div>
          </div>
        </section>
      </>
    );
};

export default Community;