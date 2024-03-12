import coffeeImg from "../../assets/chooseUs.jpg";
import coffeeBg from "../../assets/Vector.png";
import MenuButton from "../shared/MenuButton/MenuButton";

const ChooseUs = () => {
  return (
    <div
      className="mt-5 lg:mt-20"
      style={{
        backgroundImage: `url(${coffeeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto pt-4 lg:pt-32">
        <div className="space-y-5 text-center lg:text-left">
          <div className="flex gap-4 justify-center lg:justify-start items-center bg-clip-text text-transparent bg-gradient-to-r from-[#86371C] to-[#86371C]">
            <div className="border w-10"></div>
            <h6 className="font-abril-fatface">Why Choose Us</h6>
          </div>
          <h1 className="font-bakilda-histori text-2xl lg:text-5xl">
            Choosing Unlocklive, A Taste of Perfection
          </h1>
          <p className="font-value-pro-regular text-[#270A05] opacity-60">
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a <br /> symphony of aromatic notes and rich
            flavors.
          </p>
          <div className="flex justify-center lg:justify-start gap-3">
            <div className="font-bakilda-histori border-[1.5px] w-[120px] md:w-[200px] rounded-lg border-[#270A05] border-opacity-10 p-1 md:p-6">
              <h1 className="text-3xl md:text-5xl text-center">20+</h1>
              <h3 className="text-xs text-center md:text-lg">
                Years Experience
              </h3>
            </div>
            <div className="border-[1.5px] w-[120px] md:w-[200px] rounded-lg border-[#270A05] border-opacity-10 ">
              <div className="font-bakilda-histori border-[1.5px] w-[120px] md:w-[200px] rounded-lg border-[#270A05] border-opacity-10 p-1 md:p-6 rotate-6">
                <h1 className="text-3xl md:text-5xl text-center -rotate-6">
                  100+
                </h1>
                <h3 className="text-xs text-center md:text-lg -rotate-6">
                  Master Chefs
                </h3>
              </div>
            </div>
            <div className="font-bakilda-histori border-[1.5px] w-[120px] md:w-[200px] rounded-lg border-[#270A05] border-opacity-10 p-1 md:p-6">
              <h1 className="text-3xl md:text-5xl text-center">30+</h1>
              <h3 className="text-xs text-center md:text-lg">Achievements</h3>
            </div>
          </div>
          <p className="font-value-pro-regular text-[#270A05] opacity-60">
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship,
            <br /> flavor, and dedication.
          </p>
          <div className="">
            <MenuButton text={"Explore Our Menus"} />
          </div>
        </div>

        <div className="relative z-30">
          <div className="border -z-0  border-opacity-10 rounded-t-full  rounded-b-lg h-[330px] md:h-[430px] w-[330px] md:w-[400px] lg:w-[408px] absolute top-20 right-12 md:right-[184px] lg:-right-3"></div>
          <div className="overflow-hidden border rounded-lg w-80 md:w-96 mx-auto z-30 mt-5">
            <img
              className="h-[380px] md:h-[480px] z-40 w-full rounded-lg object-cover object-left"
              src={coffeeImg}
              alt="Coffee image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
