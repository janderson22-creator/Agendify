interface Props {
    label: string;
    value: string;
    maxLength?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input: React.FC<Props> = ({ label, value, onChange, maxLength }) => {
    return (
      <div className="relative">
        <p className="bg-[#F0F0F5] rounded-full text-[#7E7D80] text-sm font-semibold w-fit px-1.5 absolute left-2 -top-3">
          {label}
        </p>
        <input
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          className="w-full py-4 rounded-[10px] border border-[#EBEBF0] bg-transparent px-5 text-sm text-[#5C6666] font-semibold"
          type="text"
        />
      </div>
    );
  };
  
  export default Input;
  