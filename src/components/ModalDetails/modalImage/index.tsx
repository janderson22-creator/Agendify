import * as S from "./styles";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  imageSelected: any;
}

const ModalImage: React.FC<Props> = ({ show, setShow, imageSelected }) => {


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