import "./Buttons.css";

const Buttons = ({ title }) => {
  return (
    <button className="button-style mt-3 text-lg uppercase">{title}</button>
  );
};

export default Buttons;
