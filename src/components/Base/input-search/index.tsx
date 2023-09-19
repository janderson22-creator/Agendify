import SearchIcon from "../../../assets/icons/search.svg";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch: React.FC<Props> = ({ value, setValue }) => {
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
        placeholder="Buscar profissional"
        type="text"
        className="text-sm w-full rounded-[20px] border border-[#EBEBF0] pl-[58px] py-2.5"
      />
    </div>
  );
};

export default InputSearch;
