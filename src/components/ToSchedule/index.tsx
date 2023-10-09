import { useCallback, useEffect, useMemo, useState } from "react";
import ArrowBottom from "../../assets/icons/arrow-bottom.svg";
import Input from "../Base/input";
import classNames from "../../utils/className";
import Button from "../Base/button";
import InputMask from "react-input-mask";
import { useCommerce } from "../../context/commerce";

interface Props {
  services: string[] | undefined;
  schedules: string[];
}

const ToSchedule: React.FC<Props> = ({ services, schedules }) => {
  const [showTimes, setShowTimes] = useState(false);
  const { formattedDate, setFormattedDate, currentCommerce, editSchedules } =
    useCommerce();
  const [showServices, setShowServices] = useState(false);

  const availableTime = useMemo(() => {
    return (
      <div
        onMouseLeave={() => setShowTimes(false)}
        className="absolute top-[60px] left-0 right-0 rounded-b-[10px] z-[1] max-h-[200px] overflow-y-scroll scrollbarNone"
      >
        {schedules?.map((time, index) => (
          <div
            onClick={() => {
              setFormattedDate((prevState) => ({
                ...prevState,
                time: time,
              }));
              setShowTimes(false);
            }}
            key={index}
            className="flex items-center justify-center bg-[#8593A6] hover:bg-[#9dabc0] w-full py-4 px-2 border-b border-[#cccccc90] last-of-type:rounded-b-[10px] last-of-type:border-none"
          >
            <p className="text-[#FFF] opacity-75 font-bold">{time}</p>
          </div>
        ))}
      </div>
    );
  }, [setFormattedDate, currentCommerce, schedules]);

  const availableServices = useMemo(() => {
    return (
      <div
        onMouseLeave={() => setShowServices(false)}
        className="absolute top-[60px] left-0 right-0 rounded-b-[10px] z-[1] max-h-[200px] overflow-y-scroll scrollbarNone"
      >
        {services?.map((service, index) => (
          <div
            onClick={() => {
              setFormattedDate((prevState) => ({
                ...prevState,
                service: service,
              }));
              setShowServices(false);
            }}
            key={index}
            className="flex items-center justify-center bg-[#8593A6] hover:bg-[#9dabc0] w-full py-4 px-2 border-b border-[#cccccc90] last-of-type:rounded-b-[10px] last-of-type:border-none"
          >
            <p className="text-[#FFF] opacity-75 font-bold">{service}</p>
          </div>
        ))}
      </div>
    );
  }, [setFormattedDate, currentCommerce]);

  const isFormEmpty = useMemo(() => {
    return Object.values(formattedDate).some(
      (value) => value === "" || value === "HORÁRIO" || value === "SERVIÇO"
    );
  }, [formattedDate]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (isFormEmpty) {
        alert(
          "Por favor, preencha todos os campos antes de enviar o formulário."
        );
      } else {
      }
    },
    [isFormEmpty]
  );

  useEffect(() => {
    console.log(formattedDate);
  }, [formattedDate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <div
            className={classNames(
              "relative w-[500px] py-4 cursor-pointer",
              showServices ? "rounded-t-[10px]" : "rounded-[10px]",
              formattedDate.service === "SERVIÇO"
                ? "text-[#000] bg-[#F0F0F5]"
                : "bg-[#25DD3733]"
            )}
          >
            <div
              className="flex items-center justify-between pl-2 pr-4"
              onClick={() => setShowServices(!showServices)}
            >
              <p
                className={classNames(
                  "text-xl font-semibold text-[#000]",
                  formattedDate.service === "SERVIÇO"
                    ? "opacity-40"
                    : "opacity-100"
                )}
              >
                {formattedDate.service}
              </p>
              <img className="ml-2" src={ArrowBottom} alt="arrow-schedules" />
            </div>
            {showServices && availableServices}
          </div>

          <div
            className={classNames(
              "relative w-[160px] ml-5 py-4 cursor-pointer",
              showTimes ? "rounded-t-[10px]" : "rounded-[10px]",
              formattedDate.time === "HORÁRIO"
                ? "text-[#000] bg-[#F0F0F5]"
                : "bg-[#25DD3733]"
            )}
          >
            <div
              className="flex items-center justify-between pl-2 pr-4"
              onClick={() => setShowTimes(!showTimes)}
            >
              <p
                className={classNames(
                  "text-xl font-semibold text-[#000]",
                  formattedDate.time === "HORÁRIO"
                    ? "opacity-40"
                    : "opacity-100"
                )}
              >
                {formattedDate.time}
              </p>
              <img className="ml-2" src={ArrowBottom} alt="arrow-schedules" />
            </div>
            {showTimes && availableTime}
          </div>
        </div>

        <div className="mt-7">
          <Input
            label="Seu nome"
            maxLength={30}
            value={formattedDate.name_user}
            onChange={(e) =>
              setFormattedDate({ ...formattedDate, name_user: e.target.value })
            }
          />
        </div>

        <div className="flex items-center justify-between mt-7">
          <div className="w-full">
            <Input
              label="Observação"
              value={formattedDate.description}
              onChange={(e) =>
                setFormattedDate({
                  ...formattedDate,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="w-9/12 ml-5">
            <div className="relative">
              <p className="bg-[#F0F0F5] rounded-full text-[#7E7D80] text-sm font-semibold w-fit px-1.5 absolute left-2 -top-3">
                Celular
              </p>
              <InputMask
                value={formattedDate.phone_number}
                onChange={(e) =>
                  setFormattedDate({
                    ...formattedDate,
                    phone_number: e.target.value,
                  })
                }
                className="w-full py-4 rounded-[10px] border border-[#EBEBF0] bg-transparent px-5 text-sm text-[#5C6666] font-semibold"
                type="text"
                placeholder="(99) 99999-9999"
                mask="(99) 99999-9999"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="w-6/12 mx-auto mt-8">
        <Button
          onClick={() =>
            editSchedules(
              formattedDate.date,
              formattedDate.date,
              formattedDate.time,
              formattedDate.name_user,
              formattedDate.phone_number,
              formattedDate.service,
              formattedDate.description
            )
          }
          disabled={isFormEmpty}
          text={isFormEmpty ? "PREENCHA TODOS OS ESPAÇOS" : "AGENDAR"}
        />
      </div>
    </div>
  );
};

export default ToSchedule;
