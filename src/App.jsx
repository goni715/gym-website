import { useEffect } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Workouts from "./components/Workouts";
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {

 useEffect(()=>{
  //aos initialization
  //AOS.init();
  AOS.init({
    duration: 2500,
    delay: 400
  })

 },[])


  return (
    <>
       <div className="max-w-[1440px] mx-auto bg-page">
        <Header/>
        <Banner/>
        <About/>
        <Workouts/>
        <Pricing/>
       </div>
    </>
  );
};

export default App;