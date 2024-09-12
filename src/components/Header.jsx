import { useEffect, useState } from "react";
import { header } from "./../data/data";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  //destructure header data
  const { logo, btnLoginText, btnSignupText } = header;

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);



  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };



  return (
    <>
      <header
        className={`${
          sticky ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
        } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto transition-all duration-300`}
      >
        <div className="container flex justify-between relative">
          {/* Logo */}
          {/* <a href="/"> */}
          <img className="h-[30px]" src={logo} alt="" />
          {/* </a> */}

          {/* nav - initially hidden - show on desktop */}
          <Navbar />

          {/* btns - initially hidden - show on desktop */}
          <div className="hidden lg:flex space-x-4">
            <button className="btn btn-sm text-white hover:text-primary-200 transition">{btnLoginText}</button>
            <button className="btn btn-sm btn-primary">{btnSignupText}</button>
          </div>

          {/* nav menu btn - hidden on desktop */}
          <div onClick={toggleMobileNav} className="lg:hidden absolute right-4 cursor-pointer">
            <RiMenu4Fill className="text-primary-200 text-3xl"/>
          </div>

        </div>

          {/* mobile nav - hide on desktop */}
         <MobileNav showMobileNav={showMobileNav}/>

      </header>



    </>
  );
};

export default Header;
