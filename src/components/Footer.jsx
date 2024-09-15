import { footer } from "../data/data";

const Footer = () => {
    //destructure footer data
    const { copyrightText} = footer;
    return (
        <>
            <footer className="bg-neutral-500 h-[125px] mf:h-[195px] px-[20px]">
                <div data-aos="fade-up" data-aos-delay="200" className="container h-full flex justify-center md:items-end items-center md:pb-[50px]">
                    {/* copyright text */}
                    <p className="text-neutral-200">{copyrightText}</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;