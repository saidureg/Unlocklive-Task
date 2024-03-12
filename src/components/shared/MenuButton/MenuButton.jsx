import PropTypes from "prop-types";
const MenuButton = ({ text }) => {
  return (
    <button className="border-[1.5px] border-[#86371C] px-5 lg:px-[30px] py-3 lg:py-[18px] rounded-xl font-value-pro-medium text-[#86371C]">
      {text}
    </button>
  );
};

MenuButton.propTypes = {
  text: PropTypes.string,
};

export default MenuButton;
