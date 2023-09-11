import classNames from "../../../utils/className";

interface Props {
  disabled: boolean;
  text: string;
  onClick?: any;
}

const Button: React.FC<Props> = ({disabled, text, onClick}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "text-[22px] font-bold rounded-[10px] w-full flex items-center justify-center py-2",
        disabled
          ? "cursor-not-allowed bg-[#fb646b8d] text-[#ffffff7a]"
          : "cursor-pointer bg-[#FB646B] text-[#FFF]"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
