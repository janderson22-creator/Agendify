interface Props {
    label: string;
    value: string;
    maxLength?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input: React.FC<Props> = ({ label, value, onChange, maxLength }) => {
    return (
      <div className="relative">
        <p className="bg-[#171821] rounded-full text-[#FB646B] font-normal w-fit px-1.5 absolute left-2 -top-3">
          {label}
        </p>
        <input
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          className="w-full py-4 rounded-[10px] border border-[#FB646B] bg-transparent px-5 text-[#FFF] font-semibold"
          type="text"
        />
      </div>
    );
  };
  
  export default Input;
  