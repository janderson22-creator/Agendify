import { useEffect, useMemo } from "react";
import { useCommerce } from "../../context/commerce";
import classNames from "../../utils/className";

interface Props {
  value: string;
  setSchedules: React.Dispatch<React.SetStateAction<string[]>>;
}

const Employees: React.FC<Props> = ({ value, setSchedules }) => {
  const { formattedDate, setFormattedDate, currentCommerce } = useCommerce();

  const filterEmployees = useMemo(() => {
    if (value === "") {
      return currentCommerce?.employees;
    } else {
      return currentCommerce?.employees.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }, [value, currentCommerce]);

  return (
    <div className="w-full flex flex-col justify-around">
      {filterEmployees?.length ? (
        <>
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
            {filterEmployees.map((employeer, index) => (
              <div
                onClick={() => {
                  setFormattedDate((prevState) => ({
                    ...prevState,
                    name_employee: employeer.name,
                  }));
                  setSchedules(employeer.schedules);
                }}
                key={index}
                className={classNames(
                  "border-b border-l border-r border-[#EBEBF0] flex items-center text-[#141616] font-semibold py-4 cursor-pointer",
                  employeer.name === formattedDate.name_employee
                    ? "bg-[#25DD3733]"
                    : "hover:bg-[#eeebf54d]"
                )}
              >
                <span className="w-[20%] pl-3">{index + 1}</span>
                <div className="w-[30%]">
                  <img
                    src={employeer.avatar_url}
                    alt="schedules_app"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                </div>
                <span className="w-[30%]">{employeer.name}</span>
                <span className="w-[20%]">{employeer.function}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center mt-10 h-[200px]">
          <p className="text-2xl text-[#141616] font-normal">
            Não contém nenhum profissional com esse nome!
          </p>
        </div>
      )}
    </div>
  );
};

export default Employees;

const tableHead = [
  {
    name: "#",
    width: "20%",
  },
  {
    name: "Foto",
    width: "30%",
  },
  {
    name: "Nome",
    width: "30%",
  },
  {
    name: "Função",
    width: "22%",
  },
];
