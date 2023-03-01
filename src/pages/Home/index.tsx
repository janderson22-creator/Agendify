import * as S from "./styles";
import LogoExample from "../../assets/images/logoExample.png";
import { useState } from "react";
import DetailsMoldal from "../../components/ModalDetails";
import CalendarCommerce from "../../components/Calendar";

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

        <div className="flex items-center justify-between px-[15px] lg:px-[20px] xl:px-[20px] pt-[20px] lg:pt-[15px] xl:pt-[15px]">
          <div className="flex flex-col-reverse lg:flex-col xl:flex-col lg:items-center xl:items-center">
            <S.CommerceName>Janderson Costa Studio</S.CommerceName>
            <S.CommerceType>Barbearia & Chopperia</S.CommerceType>
          </div>
          <S.TimeOpen open={open}>
            <S.Icon open={open} /> 09:00 ás 19:00
          </S.TimeOpen>
        </div>

        <div className="px-[15px] lg:px-[20px] xl:px-[20px] mt-[20px] lg:mt-[30px] xl:mt-[30px] lg:ml-[75px] xl:ml-[75px]">
          <S.KnowMore onClick={() => setShowModal(true)}>Saiba mais</S.KnowMore>
        </div>
      </S.Header>

      <S.Services>
        <S.TitleName>Serviços</S.TitleName>
        <div className="flex items-center justify-between mt-4">
          <S.Card>
            <CalendarCommerce />
          </S.Card>

          <S.Card></S.Card>

          <S.Card></S.Card>
        </div>
      </S.Services>

      {showModal && <DetailsMoldal show={showModal} setShow={setShowModal} />}
    </S.Container>
  );
};

export default Home;
