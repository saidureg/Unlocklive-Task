import "./App.css";
import Banner from "./components/Banner/Banner";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import CoffeeMenu from "./components/CoffeeMenu/CoffeeMenu";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Overview />
      <ChooseUs />
      <CoffeeMenu />
    </>
  );
}

export default App;
