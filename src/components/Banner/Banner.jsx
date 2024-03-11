import backgroundImage from "../../assets/Background.png";
import bannerImg from "../../assets/banner.png";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="w-6/12 mx-auto">
          <img src={bannerImg} className="" />
        </div>
        <div className="w-6/12">
          <h6>WELCOME TO OUR</h6>
          <h1 className="text-8xl font-bold py-2">Unlocklive</h1>
          <h3 className="text-4xl pt-3">Elevating Your Coffee Experience</h3>
          <p className="py-6 pr-10">
            Unlocklive embodies our commitment to transforming the simple act of
            sipping coffee into a refined and memorable journey. At Epicurean,
            we take pride in curating an exceptional coffee experience that
            transcends the ordinary.
          </p>
          <div className="flex gap-10 items-center">
            <div>
              <button className="btn bg-[#86371C] text-white">
                EXPLORE OUR MENU
              </button>
            </div>
            <div className="flex gap-5 items-center">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src={avatar1} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={avatar2} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={avatar3} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold">1200+</p>
                <p className="">Tasty Variant Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
