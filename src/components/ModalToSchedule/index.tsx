import { useEffect } from "react";
import CloseIcon from "../../assets/icons/closeIcon.svg"
import { useCommerce } from "../../context/commerce";
import formatMonth from "../../utils/formatMonths";
import * as S from "./styles";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToSchedule: React.FC<Props> = ({ show, setShow }) => {
  const { formattedDate } = useCommerce();

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
            <img src={CloseIcon} alt="" />
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default ToSchedule;
