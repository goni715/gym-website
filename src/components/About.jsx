import { about } from "../data/data";

const About = () => {
    //destructure about data
    const {title, subtitle1, subtitle2, icon, link} = about;
    return (
        <>
            <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
                <div className="container px-[20px] lg:px-[135px]">
                    {/* section title */}
                    <div className="flex justify-start items-center -space-x-20 mb-[50px] lg:mb-[80px]">
                        <img src={icon} alt="about_icon" />
                        <h2 className="h2 flex -space-x-4">
                            {title}
                            <span className="text-primary-200">.</span>
                        </h2>
                    </div>
                    {/* subtitle 1 */}
                    <p className="md:text-body-md mb-12">{subtitle1}</p>
                    {/* subtitle 2 */}
                    <p className="md:text-body-md mb-8">{subtitle2}</p>
                    {/* link */}
                    
                    
                    <a className="bg-red-200 text-neutral-500 text-sm uppercase font-extrabold tracking-[1px] flex items-center gap-x-4 hover:gap-x-6 transition-all" href="">
                            {link}
                            <span className="text-2xl">{">"}</span>
                        </a>
                
                        
                    
                </div>
            </section>
        </>
    );
};

export default About;