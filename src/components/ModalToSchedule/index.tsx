import { useCallback, useEffect, useMemo, useState } from "react";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import ArrowBottom from "../../assets/icons/arrow-bottom.svg";
import { useCommerce } from "../../context/commerce";
import formatMonth from "../../utils/formatMonths";
import * as S from "./styles";
import Input from "../Base/input";
import classNames from "../../utils/className";
import Button from "../Base/button";
import { Form } from "react-router-dom";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToSchedule: React.FC<Props> = ({ show, setShow }) => {
  const { formattedDate } = useCommerce();
  const [showTimes, setShowTimes] = useState(false);
  const [form, setForm] = useState<Form>({
    name: '',
    description: '',
    price: '',
    phone_number: '',
    time: 'HORÁRIO',
  });
  

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.keyCode === 27) {
        setShow(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  const isFormEmpty = useMemo(() => {
    return Object.values(form).some(
      (value) => value === "" || value === "HORÁRIO"
    );
  }, [form]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    if (isFormEmpty) {
      alert(
        "Por favor, preencha todos os campos antes de enviar o formulário."
      );
    } else {
    }
  }, [isFormEmpty]);

  return (
    <>
      {show && <S.Overlay onClick={() => setShow(false)} />}
      <S.Container show={show}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-[151px] text-[#FB646B] font-bold">
              {formattedDate?.day.slice(0, -1)}
            </span>

            <div className="text-[40px] text-[#FFF] font-bold ml-4">
              <p>de</p>
              <span>{formatMonth(formattedDate?.month || "")}</span>
            </div>
          </div>

          <div className="cursor-pointer" onClick={() => setShow(false)}>
            <img className="w-[40px] h-[40px]" src={CloseIcon} alt="" />
          </div>
        </div>

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
                label="Descrição"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div
              className={classNames(
                "relative w-[160px] bg-[#FB646B] ml-5 py-4 cursor-pointer",
                showTimes ? "rounded-t-[10px]" : "rounded-[10px]"
              )}
            >
              <div
                className="flex items-center justify-between pl-2 pr-4"
                onClick={() => setShowTimes(!showTimes)}
              >
                <p
                  className={classNames(
                    "text-xl font-normal text-[#FFF]",
                    form.time === 'HORÁRIO' ? "opacity-50" : "opacity-100"
                  )}
                >
                 {form.time}
                </p>
                <img className="ml-2" src={ArrowBottom} alt="arrow-schedules" />
              </div>
              {showTimes && availableTime}
            </div>
          </div>

          <div className="flex items-center mt-7">
            <div className="w-3/12">
              <Input
                label="Preço"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <div className="w-9/12 ml-5">
              <Input
                label="Celular"
                value={form.phone_number}
                onChange={(e) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
              />
            </div>
          </div>
        </form>

        <div className="w-6/12 mx-auto mt-8">
          <Button
            onClick={() => setShow(false)}
            disabled={isFormEmpty}
            text={isFormEmpty ? "PREENCHA TODOS OS ESPAÇOS" : "AGENDAR"}
          />
        </div>
      </S.Container>
    </>
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
