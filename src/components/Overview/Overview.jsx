const Overview = () => {
  return (
    <div className="bg-[#FFFAF2] lg:max-h-[210px]">
      <div className="flex flex-col gap-20 lg:flex-row justify-between max-w-screen-xl mx-auto">
        <div className="bg-[#86371C] rounded-xl h-[290px] w-[315px] md:w-[450px] lg:w-[306px] mx-auto px-6 pt-5 lg:mx-0">
          <svg
            width="244"
            height="165"
            viewBox="0 0 244 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                d="M243 15.8143C194.862 -12.6709 92.4606 -0.311245 79.6239 54.9212C63.578 123.962 198.266 127.723 198.266 89.6829C198.266 48.1623 31 45.748 31 165"
                stroke="white"
              />
              <path
                d="M62.8712 130.853C54.722 131.535 36.849 138.897 30.5498 162.893C29.5257 153.119 22.3362 132.385 1.7716 127.636"
                stroke="#E3E3E3"
              />
            </g>
          </svg>
          <div className="flex items-center mt-5 gap-6 text-white">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="29.25"
                stroke="#F2EFDF"
                strokeWidth="1.5"
              />
              <path d="M40 30L25 38.6603L25 21.3397L40 30Z" fill="#F2EFDF" />
            </svg>
            <h3 className="text-2xl text-[#F2EFDF] font-abril-display-semibold">
              Play Intro Video
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around flex-1">
          <div className="text-center lg:text-left text-[#270A05] my-5 lg:my-14">
            <h3 className="text-2xl font-abril-display-semibold mb-3">
              Our Opening Hours
            </h3>
            <p className="font-value-pro-regular">Mon - Sat: 07:00 - 18:00</p>
            <p className="font-value-pro-regular">Only Sun: 09:00 - 14:00</p>
          </div>
          <div className="text-center my-5 lg:my-14 text-[#270A05]">
            <h3 className="text-2xl font-abril-display-semibold mb-3">
              Our Live Location
            </h3>
            <p className="font-value-pro-regular">
              848 A 28TH ST, Brooklyn <br /> New York, UK
            </p>
          </div>
          <div className="text-center lg:text-right my-5 lg:my-14 text-[#270A05]">
            <h3 className="text-2xl font-abril-display-semibold mb-3">
              Book A Table Now
            </h3>
            <p className="font-value-pro-regular">+1 318-254-6849</p>
            <p className="font-value-pro-regular">+1 452-754-6579</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
