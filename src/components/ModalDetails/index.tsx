import * as S from "./styles";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsMoldal: React.FC<Props> = ({ show, setShow }) => {
  return (
    <>
      {show && <S.Overlay onClick={() => setShow(false)} />}
      <S.Container show={show}></S.Container>
    </>
  );
};

export default DetailsMoldal;
