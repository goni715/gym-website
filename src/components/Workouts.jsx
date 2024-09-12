import { workouts } from "../data/data";


const Workouts = () => {
    //destructure workouts data
    const {title, icon} = workouts;
    return (
        <>
            <section className="pb-20 md:pb-28 lg:pb-[180px]">
                {/* section title-group */}
                <div className="flex items-center justify-center -space-x-20 mb-[50px] lg:mb-20">
                    <img src={icon} alt="" />
                    <h2 className="text-3xl leading-10 lg:text-5xl lg:leading-[50px] font-extrabold differ flex -space-x-4">{title}</h2>
                </div>
            </section>
        </>
    );
};

export default Workouts;