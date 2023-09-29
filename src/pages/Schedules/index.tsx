import { useEffect, useMemo, useState } from "react";
import CalendarIcon from "../../assets/icons/calendar-icon.svg";
import { useCommerce } from "../../context/commerce";
import DatePicker from "../../components/CalendarInput";
import Employees from "../../components/Empoyees";
import classNames from "../../utils/className";
import Tooltip from "../../components/Base/tooltip";
import InputSearch from "../../components/Base/input-search";
import ToSchedule from "../../components/ToSchedule";

const Schedules: React.FC = () => {
  const {
    fetchEstablishmentsById,
    currentCommerce,
    formattedDate,
    setFormattedDate,
  } = useCommerce();
  const [hoverTooltip, setHoverTooltip] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [schedulesEmployee, setSchedulesEmployee] = useState<string[]>([]);

  useEffect(() => {
    if (currentCommerce) return;

    const id = location.pathname.split("/")[2];

    fetchEstablishmentsById(id);
  }, []);

  useEffect(() => {
    setFormattedDate({
      dayOnWeek: "",
      month: "",
      day: "",
      year: "",
      name_employee: "",
      name_user: "",
      description: "",
      phone_number: "",
      service: "SERVIÇO",
      time: "HORÁRIO",
    });
  }, []);

  const dateSelected = useMemo(() => {
    if (
      !formattedDate.day ||
      !formattedDate.dayOnWeek ||
      !formattedDate.month ||
      !formattedDate.year
    ) {
      return false;
    } else {
      return true;
    }
  }, [formattedDate]);

  return (
    <div className="w-full">
      <div className="flex flex-col h-fit w-full rounded-[10px] py-5 px-4 mt-[30px]">
        <div>
          <label className="text-[#5C6666] text-[18px] font-semibold mr-4">
            Selecione a data que deseja o serviço:
          </label>
          <DatePicker />
        </div>

        <div
          onMouseEnter={() => setHoverTooltip(true)}
          onMouseLeave={() => setHoverTooltip(false)}
          className="relative w-full mt-5"
        >
          <div
            className={classNames(
              "w-full",
              dateSelected
                ? "opacity-100"
                : "opacity-20 pointer-events-none cursor-not-allowed"
            )}
          >
            <InputSearch
              value={searchValue}
              setValue={setSearchValue}
              placeholder="Buscar profissional"
            />
            <Employees
              value={searchValue}
              setSchedules={setSchedulesEmployee}
            />
          </div>

          {hoverTooltip && !dateSelected && (
            <Tooltip message={"Selecione a data que deseja o atendimento"} />
          )}

          {hoverTooltip &&
            dateSelected &&
            !formattedDate.name_employee &&
            searchValue === "" && (
              <Tooltip
                message={"Selecione o profissinal que deseja o atendimento"}
              />
            )}
        </div>

        <div
          className={classNames(
            "relative flex items-center mt-10",
            formattedDate?.name_employee
              ? "opacity-100"
              : "opacity-20 pointer-events-none cursor-not-allowed"
          )}
        >
          <div className="flex items-center justify-center w-[52px] h-[52px] bg-[#F0F0F5] rounded-[8px]">
            <img
              src={CalendarIcon}
              alt="calendar_schedules"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col text-[#5C6666] ml-3">
            <span className="font-bold">
              {!formattedDate?.name_employee
                ? "Selecione a data e o profissional que deseja"
                : `${formattedDate?.dayOnWeek}
              em ${formattedDate?.day} de ${formattedDate?.month} de
              ${formattedDate?.year} com ${formattedDate.name_employee}`}
            </span>
            <p className="text-xs mt-2">Data</p>
          </div>
        </div>

        <div
          className={classNames(
            "mt-14",
            formattedDate?.name_employee
              ? "opacity-100"
              : "opacity-20 pointer-events-none cursor-not-allowed"
          )}
        >
          <ToSchedule
            services={currentCommerce?.services}
            schedules={schedulesEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedules;
