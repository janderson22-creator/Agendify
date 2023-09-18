import { useCallback, useMemo, useState } from "react";
import ArrowBottom from "../../assets/icons/arrow-bottom.svg";
import Input from "../Base/input";
import classNames from "../../utils/className";
import Button from "../Base/button";
import InputMask from "react-input-mask";

const ToSchedule: React.FC = () => {
  const [showTimes, setShowTimes] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    phone_number: "",
    service: "SERVIÇO",
    time: "HORÁRIO",
  });

  const availableTime = useMemo(() => {
    return (
      <div
        onMouseLeave={() => setShowTimes(false)}
        className="absolute top-[60px] left-0 right-0 rounded-b-[10px] z-[1] max-h-[200px] overflow-y-scroll scrollbarNone"
      >
        {times.map((time, index) => (
          <div
            onClick={() => {
              setForm({ ...form, time: time.time });
              setShowTimes(false);
            }}
            key={index}
            className="flex items-center justify-center bg-[#8593A6] hover:bg-[#9dabc0] w-full py-4 px-2 border-b border-[#cccccc90] last-of-type:rounded-b-[10px] last-of-type:border-none"
          >
            <p className="text-[#FFF] opacity-75 font-bold">{time.time}</p>
          </div>
        ))}
      </div>
    );
  }, [form]);
  
  const availableServices = useMemo(() => {
    return (
      <div
        onMouseLeave={() => setShowServices(false)}
        className="absolute top-[60px] left-0 right-0 rounded-b-[10px] z-[1] max-h-[200px] overflow-y-scroll scrollbarNone"
      >
        {services.map((service, index) => (
          <div
            onClick={() => {
              setForm({ ...form, service: service.service });
              setShowServices(false);
            }}
            key={index}
            className="flex items-center justify-center bg-[#8593A6] hover:bg-[#9dabc0] w-full py-4 px-2 border-b border-[#cccccc90] last-of-type:rounded-b-[10px] last-of-type:border-none"
          >
            <p className="text-[#FFF] opacity-75 font-bold">{service.service}</p>
          </div>
        ))}
      </div>
    );
  }, [form]);

  const isFormEmpty = useMemo(() => {
    return Object.values(form).some(
      (value) => value === "" || value === "HORÁRIO" || value === "SERVIÇO"
    );
  }, [form]);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Seu nome"
            maxLength={30}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="flex items-center justify-between mt-7">
          <div className="w-full">
            <Input
              label="Observação"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div className="w-9/12 ml-5">
            <div className="relative">
              <p className="bg-[#F0F0F5] rounded-full text-[#7E7D80] text-sm font-semibold w-fit px-1.5 absolute left-2 -top-3">
                Celular
              </p>
              <InputMask
                value={form.phone_number}
                onChange={(e) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
                className="w-full py-4 rounded-[10px] border border-[#EBEBF0] bg-transparent px-5 text-sm text-[#5C6666] font-semibold"
                type="text"
                placeholder="(99) 99999-9999"
                mask="(99) 99999-9999"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center mt-7">
        <div
            className={classNames(
              "relative w-[500px] py-4 cursor-pointer",
              showServices ? "rounded-t-[10px]" : "rounded-[10px]",
              form.service === "SERVIÇO"
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
                  form.service === "SERVIÇO" ? "opacity-40" : "opacity-100"
                )}
              >
                {form.service}
              </p>
              <img className="ml-2" src={ArrowBottom} alt="arrow-schedules" />
            </div>
            {showServices && availableServices}
          </div>

          <div
            className={classNames(
              "relative w-[160px] ml-5 py-4 cursor-pointer",
              showTimes ? "rounded-t-[10px]" : "rounded-[10px]",
              form.time === "HORÁRIO"
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
                  form.time === "HORÁRIO" ? "opacity-40" : "opacity-100"
                )}
              >
                {form.time}
              </p>
              <img className="ml-2" src={ArrowBottom} alt="arrow-schedules" />
            </div>
            {showTimes && availableTime}
          </div>
        </div>
      </form>

      <div className="w-6/12 mx-auto mt-8">
        <Button
          onClick={() => console.log("teste")}
          disabled={isFormEmpty}
          text={isFormEmpty ? "PREENCHA TODOS OS ESPAÇOS" : "AGENDAR"}
        />
      </div>
    </div>
  );
};

export default ToSchedule;

interface Form {
  name: string;
  description: string;
  price: string;
  phone_number: string;
  time: string;
}

const times = [
  {
    time: "8:00",
  },
  {
    time: "9:00",
  },
  {
    time: "11:00",
  },
  {
    time: "12:00",
  },
  {
    time: "14:00",
  },
  {
    time: "15:00",
  },
  {
    time: "17:00",
  },
  {
    time: "18:00",
  },
  {
    time: "19:00",
  },
];

const services = [
  {
    service: "Corte Social 15$",
  },
  {
    service: "Corte Degradê 20$",
  },
  {
    service: "Corte Degradê navalhado 20$",
  },
  {
    service: "Corte Militar 10$",
  },
  {
    service: "Corte Degradê 20$",
  },
  {
    service: "Corte + barba 35$",
  },
];
