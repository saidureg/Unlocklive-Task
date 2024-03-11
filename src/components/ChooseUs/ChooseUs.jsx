import coffeeImg from "../../assets/chooseUs.jpg";
import coffeeBg from "../../assets/Vector.png";

const ChooseUs = () => {
  return (
    <div
      className="mt-20"
      style={{
        backgroundImage: `url(${coffeeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="flex gap-6 max-w-screen-xl mx-auto pt-32">
        <div>
          <h6>Why Choose Us</h6>
          <h1>Choosing Unlocklive, A Taste of Perfection</h1>
          <p>
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a <br /> symphony of aromatic notes and rich
            flavors.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden w-96">
          <img
            className="h-[420px] w-full object-cover object-left"
            src={coffeeImg}
            alt="Coffee image"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
