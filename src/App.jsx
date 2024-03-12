import "./App.css";
import Banner from "./components/Banner/Banner";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import CoffeeMenu from "./components/CoffeeMenu/CoffeeMenu";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import ShowCase from "./components/ShowCase/ShowCase";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Overview />
      <ChooseUs />
      <CoffeeMenu />
      <ShowCase />
      <Footer />
    </>
  );
}

export default App;
