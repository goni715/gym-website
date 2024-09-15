import { footer } from "../data/data";

const Footer = () => {
    //destructure footer data
    const { logo, copyrightText} = footer;
    return (
        <>
            <footer>
                <div className="container">
                    {/* logo */}
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                    {/* copyright text */}
                    <p>{copyrightText}</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;