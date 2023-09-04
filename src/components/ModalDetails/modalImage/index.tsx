import { useEffect } from "react";
import * as S from "./styles";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  imageSelected: any;
}

const ModalImage: React.FC<Props> = ({ show, setShow, imageSelected }) => {
  
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
        <S.Img src={imageSelected} alt="" />
      </S.Container>
    </>
  );
};

export default ModalImage;
