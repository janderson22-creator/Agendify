import * as S from "./styles";
import LogoExample from "../../assets/images/logoExample.png";
import CalendarIcon from "../../assets/icons/calendar-home.svg";
import ServiceIcon from "../../assets/icons/service.svg";
import ShopIcon from "../../assets/icons/shop.svg";
import { useMemo, useState } from "react";
import DetailsMoldal from "../../components/modals/ModalDetails";
import { useCommerce } from "../../context/commerce";
import { Link } from "react-router-dom";

const Establishment: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { commerceId } = useCommerce();
  const listItems = useMemo(
    () => [
      {
        icon: CalendarIcon,
        name: "Agendamento",
        sub: "Agende agora seu serviço e verifique nossos horarios",
        link: `/jandersonStudio/${commerceId}/schedules`,
      },
      {
        icon: ServiceIcon,
        name: "Serviços",
        sub: "Confira agora nossa lista de serviços",
        link: `/jandersonStudio/${commerceId}/services`,
      },
      {
        icon: ShopIcon,
        name: "Produtos",
        sub: "Confira nossa lista de produtos",
        link: `/jandersonStudio/${commerceId}/products`,
      },
    ],
    []
  );

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
        <S.TitleName>O que procura?</S.TitleName>
        <div className="flex items-center justify-between mt-8 py-5 gap-4">
          {listItems.map((i, index) => (
            <Link
              to={i.link}
              key={index}
              className="border border-[#D4D4DE] w-full h-full rounded-[10px] relative pt-[100px] pb-5 px-[10px] min-h-[200px]  shadow-md hover:shadow-lg shadow-[#00000045] hover:shadow-[#0000006d] cursor-pointer"
            >
              <div className="bg-[#738CBF] w-[120px] h-[120px] p-6 rounded-full absolute -top-9 left-0 right-0 mx-auto">
                <img className="w-full h-full" src={i.icon} alt={i.name} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[20px] text-[#3F3F3F] font-semibold">
                  {i.name}
                </h1>
                <h2 className="text-[14px] text-[#7B7B80] font-normal mt-2">
                  {i.sub}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </S.Services>

      {showModal && <DetailsMoldal show={showModal} setShow={setShowModal} />}
    </S.Container>
  );
};

export default Establishment;