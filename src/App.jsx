import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";


const App = () => {
  return (
    <>
       <div className="max-w-[1440px] mx-auto bg-page">
        <Header/>
        <Banner/>
        <About/>
       </div>
    </>
  );
};

export default App;