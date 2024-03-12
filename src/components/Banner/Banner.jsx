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
        <div className="lg:w-6/12">
          <img src={bannerImg} className="" />
        </div>
        <div className="lg:w-6/12">
          <h6 className="font-bakilda-histori text-center lg:text-left">
            WELCOME TO OUR
          </h6>
          <h1 className="font-bakilda-histori text-5xl lg:text-8xl py-2 text-center lg:text-left">
            Unlocklive
          </h1>
          <h3 className="font-bakilda-histori text-2xl lg:text-4xl pt-3 text-center lg:text-left">
            Elevating Your Coffee Experience
          </h3>
          <p className="font-value-pro-regular text-[#270A05] opacity-60 py-6 lg:pr-10 text-center lg:text-left">
            Unlocklive embodies our commitment to transforming the simple act of
            sipping coffee into a refined and memorable journey. At Epicurean,
            we take pride in curating an exceptional coffee experience that
            transcends the ordinary.
          </p>
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            <div>
              <button className="btn font-value-pro-medium bg-[#86371C] text-white">
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
                <p className="font-abril-display-semibold text-2xl">1200+</p>
                <p className="font-value-pro-regular opacity-60 text-[#270A05]">
                  Tasty Variant Coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
