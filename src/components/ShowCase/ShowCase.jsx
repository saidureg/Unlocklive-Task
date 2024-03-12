import gallery1 from "../../assets/gallery/1.jpg";
import gallery2 from "../../assets/gallery/2.jpg";
import gallery3 from "../../assets/gallery/3.jpg";
import gallery4 from "../../assets/gallery/4.jpg";
import gallery5 from "../../assets/gallery/5.jpg";
const ShowCase = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex flex-col items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-[#86371C] to-[#86371C]">
        <h6 className="text-center font-abril-fatface mx-7">Showcase</h6>
        <div className="border w-14"></div>
      </div>
      <h1 className="text-[#270A05] text-center font-bakilda-histori text-4xl my-2 ">
        Our Chefs New Creations
      </h1>
      <p className="font-value-pro-regular text-[#270A05] opacity-60 text-center my-2">
        Behold the extraordinary creations born from the synergy of our users'
        ingenuity <br /> and the transformative power of AI, a testament to
        boundless innovation.
      </p>
      {/* tab */}
      <div
        role="tablist"
        className="tabs max-w-screen-lg mx-auto overflow-x-auto font-value-pro-regular text-lg my-8 mx-2"
      >
        <a
          role="tab"
          className="tab border rounded-t-full rounded-b-full lg:w-[70px] border-[#86371C] text-[font-value-pro-regular] opacity-70"
        >
          All
        </a>
        <a role="tab" className="tab tab-active lg:w-[70px]">
          Burger
        </a>
        <a role="tab" className="tab lg:w-[70px]">
          Drinks
        </a>
        <a role="tab" className="tab lg:w-[70px]">
          Pizza
        </a>
        <a role="tab" className="tab tab-active lg:w-[70px]">
          Dinner
        </a>
        <a role="tab" className="tab lg:w-[70px]">
          Lunch
        </a>
        <a role="tab" className="tab tab-active lg:w-[70px]">
          Cookies
        </a>
        <a role="tab" className="tab lg:w-[70px]">
          Bakery
        </a>
      </div>
      {/* gallery */}
      <div className="grid gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="mx-3 md:mx-0 md:col-span-1">
            <img
              className="h-[320px] md:h-[300px] lg:h-[348px] w-full rounded-lg object-cover object-center"
              src={gallery1}
              alt="gallery-photo"
            />
          </div>
          <div className="mx-3 md:mx-0 md:col-span-2">
            <img
              className="h-[320px] md:h-[300px] lg:h-[348px] w-full rounded-lg object-cover object-top"
              src={gallery2}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="mx-3 md:mx-0 md:col-span-3">
            <img
              className="h-[320px] md:h-[300px] lg:h-[348px] w-full rounded-lg object-cover object-left"
              src={gallery3}
              alt="gallery-photo"
            />
          </div>
          <div className="mx-3 md:mx-0 md:col-span-5">
            <img
              className="h-[320px] md:h-[300px] lg:h-[348px] w-full rounded-lg object-cover object-center"
              src={gallery4}
              alt="gallery-photo"
            />
          </div>
          <div className="mx-3 md:mx-0 md:col-span-4">
            <img
              className="h-[320px] md:h-[300px] lg:h-[348px] w-full rounded-lg object-cover object-center "
              src={gallery5}
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
