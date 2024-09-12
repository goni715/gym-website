import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Workouts from "./components/Workouts";


const App = () => {
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