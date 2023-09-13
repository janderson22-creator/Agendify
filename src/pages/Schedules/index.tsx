import { useEffect, useMemo, useState } from "react";
import { useCommerce } from "../../context/commerce";
import ModalEmployees from "../../components/modals/ModalEmployees";
import DatePicker from "../../components/CalendarInput";
import Employees from "../../components/Empoyees";
import classNames from "../../utils/className";

const Schedules: React.FC = () => {
  const { formattedDate, setFormattedDate } = useCommerce();
  const [showEmployeersModal, setShowEmployeersModal] = useState(false);

  useEffect(() => {
    setFormattedDate({
      dayOnWeek: "",
      month: "",
      day: "",
      year: "",
      name_employee: "",
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
    <div className="w-full pt-[60px]">
      <div className="flex flex-col h-fit w-full rounded-[10px] py-5 px-4 mt-[30px]">
        <div>
          <label className="text-[#5C6666] text-[18px] font-semibold mr-4">
            Selecione a data que deseja o serviço:
          </label>
          <DatePicker />
        </div>

        <div
          className={classNames(
            "mt-6",
            dateSelected ? "opacity-100" : "opacity-20 pointer-events-none cursor-not-allowed"
          )}
        >
          <Employees />
        </div>
      </div>
      {showEmployeersModal && (
        <ModalEmployees
          show={showEmployeersModal}
          setShow={setShowEmployeersModal}
        />
      )}
    </div>
  );
};

export default Schedules;

const options = [
  {
    title: "Disponível",
    color: "#000",
  },
  {
    title: "Fechado",
    color: "#FFF",
  },
  {
    title: "Esgotado",
    color: "#FB646B",
  },
];
