import { useEffect, useState } from "react";
import CalendarComponent from "../../components/Calendar";
import { useCommerce } from "../../context/commerce";
import classNames from "../../utils/className";
import ToSchedule from "../../components/ModalToSchedule";

const Schedules: React.FC = () => {
  const { formattedDate, setFormattedDate } = useCommerce();
  const [showToSchedule, setShowToSchedule] = useState(false)

  useEffect(() => {
    setFormattedDate({
      dayOnWeek: "",
      month: "",
      day: "",
      year: "",
    });
  }, []);

  return (
    <div className="pt-[60px]">
      <span className="text-[#FFF] text-[36px] font-bold">
        Janderson Costa Studio
      </span>
      <div className="w-full rounded-[10px] bg-[#8593A6] py-5 px-[72px] mt-[30px]">
        <p className="text-[#FFF] text-[30px] font-semibold">
          Selecione uma data e hora
        </p>
      </div>

      <div className="flex h-fit w-full rounded-[10px] bg-[#8593A6] py-5 px-4 mt-[30px]">
        <div>
          <CalendarComponent />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex ml-4 pt-3">
            {options.map((item, index) => (
              <div
                className="flex items-center mr-4 last-of-type:mr-0"
                key={index}
              >
                <div
                  className="w-[10px] h-[10px] rounded-full mr-2"
                  style={{ background: item.color }}
                />

                <span style={{ color: item.color }}>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-4">
            <button
              onClick={() => setShowToSchedule(true)}
              disabled={formattedDate && formattedDate.day === ""}
              className={classNames(
                "text-[22px] font-bold rounded-[10px] w-full flex items-center justify-center py-2",
                formattedDate && formattedDate.day === ""
                  ? "cursor-not-allowed bg-[#fb646b8d] text-[#ffffff7a]"
                  : "cursor-pointer bg-[#FB646B] text-[#FFF]"
              )}
            >
             {formattedDate && formattedDate.day === "" ? "ESCOLHA UMA DATA" : "AGENDAR"}
            </button>
          </div>
        </div>
      </div>
      {showToSchedule && <ToSchedule show={showToSchedule} setShow={setShowToSchedule} />}
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
