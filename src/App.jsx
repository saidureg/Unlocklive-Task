import "./App.css";
import Banner from "./components/Banner/Banner";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Overview />
      <ChooseUs />
    </>
  );
}

export default App;
