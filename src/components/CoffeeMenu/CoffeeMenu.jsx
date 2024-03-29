import coffee1 from "../../assets/coffee_menu/1.jpg";
import coffee2 from "../../assets/coffee_menu/2.jpg";
import coffee3 from "../../assets/coffee_menu/3.jpg";
import coffee4 from "../../assets/coffee_menu/4.jpg";
import MenuButton from "../shared/MenuButton/MenuButton";

const CoffeeMenu = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#86371C] to-[#86371C]">
        <div className="border w-10"></div>
        <h6 className="text-center font-abril-fatface mx-7">Coffee Menu</h6>
        <div className="border w-10"></div>
      </div>
      <h1 className="text-[#270A05] text-center font-bakilda-histori text-4xl mt-2 mb-14">
        Unlocklive Coffee Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
        {/* first  */}
        <div className="flex items-center gap-4 border rounded-2xl mx-2 lg:mx-0 p-3 lg:p-8">
          <div className="border border-dashed border-[#270A05] rounded-full w-[84px] h-[84px]">
            <div className="border bg-gray-100 flex justify-center items-center rounded-full overflow-hidden w-[80px] h-[80px]">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover object-center mx-auto"
                src={coffee1}
                alt="coffee"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-abril-display-semibold text-lg lg:text-2xl">
                Double Espresso x2
              </h3>
              <p className="font-value-pro-regular text-sm opacity-70">
                There are many variations of passages Lorem{" "}
                <span className="px-2 hidden lg:inline text-gray-300">
                  ...................................
                </span>
                <br className="hidden lg:inline-block" /> Ipsum form
              </p>
            </div>
            <div className="flex justify-center border border-dashed border-[#270A05] rounded-full w-[60px] h-[60px]">
              <div className="flex justify-center items-center border rounded-full bg-[#86371C] text-white w-[58px] h-[58px]">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
        {/* two  */}
        <div className="flex items-center gap-4 border rounded-2xl mx-2 lg:mx-0 p-3 lg:p-8">
          <div className="border border-dashed border-[#270A05] rounded-full w-[84px] h-[84px]">
            <div className="border bg-gray-100 flex justify-center items-center rounded-full overflow-hidden w-[80px] h-[80px]">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover object-center mx-auto"
                src={coffee3}
                alt="coffee"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-abril-display-semibold text-lg lg:text-2xl">
                Hazelnut Heaven Latte
              </h3>
              <p className="font-value-pro-regular text-sm opacity-70">
                There are many variations of passages Lorem{" "}
                <span className="px-2 hidden lg:inline text-gray-300">
                  ...................................
                </span>
                <br className="hidden lg:inline-block" /> Ipsum form
              </p>
            </div>
            <div className="flex justify-center border border-dashed border-[#270A05] rounded-full w-[60px] h-[60px]">
              <div className="flex justify-center items-center border rounded-full bg-gray-300 text-[#270A05] w-[58px] h-[58px]">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
        {/* third  */}
        <div className="flex items-center gap-4 border rounded-2xl mx-2 lg:mx-0 p-3 lg:p-8">
          <div className="border border-dashed border-[#270A05] rounded-full w-[84px] h-[84px]">
            <div className="border bg-gray-100 flex justify-center items-center rounded-full overflow-hidden w-[80px] h-[80px]">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover object-bottom mx-auto"
                src={coffee2}
                alt="coffee"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-abril-display-semibold text-lg lg:text-2xl">
                Salted Caramel Cold Brew
              </h3>
              <p className="font-value-pro-regular text-sm opacity-70">
                There are many variations of passages Lorem{" "}
                <span className="px-2 hidden lg:inline text-gray-300">
                  ...................................
                </span>
                <br className="hidden lg:inline-block" /> Ipsum form
              </p>
            </div>
            <div className="flex justify-center border border-dashed border-[#270A05] rounded-full w-[60px] h-[60px]">
              <div className="flex justify-center items-center border rounded-full bg-gray-300 text-[#270A05] w-[58px] h-[58px]">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
        {/* four  */}
        <div className="flex items-center gap-4 border rounded-2xl mx-2 lg:mx-0 p-3 lg:p-8">
          <div className="border border-dashed border-[#270A05] rounded-full w-[84px] h-[84px]">
            <div className="border bg-gray-100 flex justify-center items-center rounded-full overflow-hidden w-[80px] h-[80px]">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover object-bottom mx-auto"
                src={coffee4}
                alt="coffee"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-abril-display-semibold text-lg lg:text-2xl">
                Coconut Cream Delight (Summer)
              </h3>
              <p className="font-value-pro-regular text-sm opacity-70">
                There are many variations of passages Lorem{" "}
                <span className="px-2 hidden lg:inline text-gray-300">
                  ...................................
                </span>
                <br className="hidden lg:inline-block" /> Ipsum form
              </p>
            </div>
            <div className="flex justify-center border border-dashed border-[#270A05] rounded-full w-[60px] h-[60px]">
              <div className="flex justify-center items-center border rounded-full bg-gray-300 text-[#270A05] w-[58px] h-[58px]">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <MenuButton text={"View All Menu"} />
      </div>
    </div>
  );
};

export default CoffeeMenu;
