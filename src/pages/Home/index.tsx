import * as S from "./styles";
import LogoExample from "../../assets/images/logoExample.png";
import { useState } from "react";
import DetailsMoldal from "../../components/ModalDetails";

const Home: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Container>
      <S.Header>
        <div className="relative">
          <S.CoverImage src={LogoExample} />
          <S.ProfileImage src={LogoExample} />
        </div>

        <div className="flex items-center justify-between px-[20px] pt-[15px]">
          <div className="flex flex-col items-center">
            <S.CommerceName>Janderson Costa Studio</S.CommerceName>
            <S.CommerceType>Barbearia & Chopperia</S.CommerceType>
          </div>
          <S.TimeOpen open={open}>
            <S.Icon open={open} /> 09:00 ás 19:00
          </S.TimeOpen>
        </div>

        <div className="px-[20px] mt-[30px] ml-[75px]">
          <S.KnowMore onClick={() => setShowModal(true)}>Saiba mais</S.KnowMore>
        </div>
      </S.Header>
      {showModal && <DetailsMoldal show={showModal} setShow={setShowModal} />}
    </S.Container>
  );
};

export default Home;
