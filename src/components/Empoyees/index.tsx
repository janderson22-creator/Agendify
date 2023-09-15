import { useCommerce } from "../../context/commerce";
import classNames from "../../utils/className";

const Employees: React.FC = () => {
  const { formattedDate, setFormattedDate } = useCommerce();

  return (
    <div className="w-full flex flex-col justify-around">
      <div className="flex items-center mt-4 pl-3 bg-[#F0F0F5] py-4 rounded-t-[10px]">
        {tableHead.map((item, index) => (
          <span
            className="text-[#7E7D80] text-sm font-semibold"
            key={index}
            style={{ width: item.width }}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="flex flex-col">
        {employess.map((employeer, index) => (
          <div
            onClick={() =>
              setFormattedDate((prevState) => ({
                ...prevState,
                name_employee: employeer.name,
              }))
            }
            key={index}
            className={classNames('border-b border-l border-r border-[#EBEBF0] flex items-center text-[#141616] font-semibold py-4 cursor-pointer', employeer.name === formattedDate.name_employee ? 'bg-[#25DD3733]' : 'hover:bg-[#eeebf54d]')}
          >
            <span className="w-[12%] pl-3">{index + 1}</span>
            <div className="w-[22%]">
              <img
                src={employeer.avatar_url}
                alt="schedules_app"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
            </div>
            <span className="w-[22%]">{employeer.name}</span>
            <span className="w-[22%]">{employeer.function}</span>
            <span className="w-[22%] pl-3">{employeer.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;

const tableHead = [
  {
    name: "#",
    width: "12%",
  },
  {
    name: "Foto",
    width: "22%",
  },
  {
    name: "Nome",
    width: "22%",
  },
  {
    name: "Função",
    width: "22%",
  },
  {
    name: "Tempo de profissão",
    width: "22%",
  },
];

const employess = [
  {
    name: "Cayre Bezerra",
    avatar_url: "https://picsum.photos/200/300",
    function: "Barbeira",
    time: "2 anos",
  },
  {
    name: "Janderson Costa",
    avatar_url: "https://picsum.photos/200/300",
    function: "Barbeiro",
    time: "4 anos",
  },
];
