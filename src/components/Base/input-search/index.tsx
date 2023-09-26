import SearchIcon from "../../../assets/icons/search.svg";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string
}

const InputSearch: React.FC<Props> = ({ value, setValue, placeholder }) => {
  return (
    <div className="flex relative">
      <img
        className="absolute left-5 my-auto bottom-0 top-0"
        src={SearchIcon}
        alt=""
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type="text"
        className="text-sm w-full rounded-[10px] border border-[#EBEBF0] pl-[58px] py-2.5"
      />
    </div>
  );
};

export default InputSearch;
