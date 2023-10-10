import { useCallback, useEffect, useMemo, useState } from "react";
import {
  EmployeeTypes,
  ScheduleMarkedTypes,
  useCommerce,
} from "../../context/commerce";
import classNames from "../../utils/className";

interface Props {
  value: string;
  setSchedules: React.Dispatch<React.SetStateAction<string[]>>;
}

const Employees: React.FC<Props> = ({ value, setSchedules }) => {
  const { formattedDate, setFormattedDate, currentCommerce } = useCommerce();
  // const [filteredSchedules, setFilteredSchedules] = useState<ScheduleMarkedTypes[]>([]);

  const filterEmployees = useMemo(() => {
    if (value === "") {
      return currentCommerce?.employees;
    } else {
      return currentCommerce?.employees.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }, [value, currentCommerce]);

  function mapDayOfWeekToIndex(dayOfWeek: string): number {
    switch (dayOfWeek) {
      case "sunday":
        return 0;
      case "monday":
        return 1;
      case "tuesday":
        return 2;
      case "wednesday":
        return 3;
      case "thursday":
        return 4;
      case "friday":
        return 5;
      case "saturday":
        return 6;
      default:
        return -1; // Retorna -1 para indicar que o dia não foi encontrado
    }
  }

  const clickEmployee = useCallback(
    (employeer: EmployeeTypes) => {
      const selectedDate = new Date(formattedDate.date);

      const filteredSchedules = employeer.schedules_marked.filter(
        (schedule) => {
          const scheduleDate = new Date(schedule.start.seconds * 1000);

          // Compare apenas o ano, mês e dia
          return (
            scheduleDate.getFullYear() === selectedDate.getFullYear() &&
            scheduleDate.getMonth() === selectedDate.getMonth() &&
            scheduleDate.getDate() === selectedDate.getDate() + 1
          );
        }
      );

      const uniqueHours = new Set<string>();

      filteredSchedules.forEach((schedule) => {
        const scheduleDate = new Date(schedule.start.seconds * 1000);
        const hour = scheduleDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        uniqueHours.add(hour);
      });

      const hoursArray = Array.from(uniqueHours);

      selectedDate.setDate(selectedDate.getDate() + 1);

      // Obtenha o dia da semana em formato numérico (0 para domingo, 1 para segunda, etc.)
      const dayOfWeek = selectedDate.getDay();

      // Mapeie o número do dia da semana para o nome do dia em inglês
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = daysOfWeek[dayOfWeek];

      const scheduleList =
        employeer.schedules[
          dayName.toLowerCase() as keyof typeof employeer.schedules
        ];

      if (scheduleList.length) {
        const differentHours = scheduleList.filter(
          (schedule) => !hoursArray.includes(schedule)
        );

        if (differentHours.length) {

          setSchedules(differentHours);
          setFormattedDate((prevState) => ({
            ...prevState,
            id_employee: employeer.id,
            name_employee: employeer.name,
          }));

        } else {
          alert(`Não há mais horários nesse dia para ${employeer.name}.`);
        }
      } else {
        alert(`${employeer.name} não trabalha neste dia.`);
      }
    },
    [formattedDate.date]
  );

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
                onClick={() => clickEmployee(employeer)}
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
