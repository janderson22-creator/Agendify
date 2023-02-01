import { CloseIcon } from "../../assets/icons/closeIcon";
import ImageAboutUs1 from "../../assets/images/aboutUs1.png";
import ImageAboutUs2 from "../../assets/images/aboutUs2.png";
import ImageAboutUs3 from "../../assets/images/aboutUs3.png";
import Slider from "react-slick";
import * as S from "./styles";
import { useCallback, useMemo, useState } from "react";
import { ArrowRightIcon } from "../../assets/icons/arrowRight";
import { ArrowRightSlider } from "../../assets/icons/arrowRightSlider";
import { WhatsappIcon } from "../../assets/icons/whatsappIcon";
import { EmailIcon } from "../../assets/icons/emailIcon";
import { InstagramIcon } from "../../assets/icons/instagramIcon";
import { PhoneIcon } from "../../assets/icons/phoneIcon";
import ModalImage from "./modalImage";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsModal: React.FC<Props> = ({ show, setShow }) => {
  const [showImage, setShowImage] = useState(false);
  const [imageSelected, setImageSelected] = useState<any>();
  const images = useMemo(
    () => [
      {
        image: ImageAboutUs1,
      },
      {
        image: ImageAboutUs2,
      },
      {
        image: ImageAboutUs3,
      },
      {
        image: ImageAboutUs1,
      },
      {
        image: ImageAboutUs2,
      },
      {
        image: ImageAboutUs3,
      },
    ],
    []
  );

  const icons = useMemo(
    () => [
      {
        icon: <InstagramIcon />,
      },
      {
        icon: <EmailIcon />,
      },
      {
        icon: <WhatsappIcon />,
      },
      {
        icon: <PhoneIcon />,
      },
    ],
    []
  );

  const clickImage = useCallback(
    (item: any) => {
      setImageSelected(item);
      setShowImage(true);
    },
    [setImageSelected, setShowImage]
  );

  return (
    <>
      {show && <S.Overlay onClick={() => setShow(false)} />}
      <S.Container show={show}>
        <div className="px-[10px] lg:px-[30px] xl:px-[30px]">
          <div
            onClick={() => setShow(false)}
            className="flex justify-end cursor-pointer"
          >
            <CloseIcon />
          </div>
          <div className="flex items-center justify-center mt-2">
            <S.TextAboutUs>Sobre nós</S.TextAboutUs>
          </div>
          <div className="mt-[20px]">
            <S.TextSub>
              Somos a JandersonCostaStudio, uma barbearia e shopperia na cidade
              de Natal - RN. Somos referência no seguimento barbearia e corte de
              cabelo em todo o Brasil, nossos produtos são conhecidos por
              entragar serviçoes exemplares e saborosos.
            </S.TextSub>
          </div>
        </div>

        <S.ContainerCards>
          <Slider {...settings}>
            {images.map((item, index) => (
              <S.Card
                onClick={() => clickImage(item.image)}
                key={index}
                src={item.image}
              />
            ))}
          </Slider>
          <S.Shadow />
        </S.ContainerCards>

        <div className="mt-[30px] px-[30px]">
          <S.LabelInformation>
            Localização do estabelecimento
          </S.LabelInformation>
          <S.Subtitle>
            Avenida das Amoebas - 1200, Natal-RN CEP: 59112-000
          </S.Subtitle>
        </div>

        <div className="mt-[20px] px-[30px]">
          <S.LabelInformation>Dados sobre o estabelecimento</S.LabelInformation>
          <S.Subtitle>CNPJ: XX.XXX.XXX/0001-XX</S.Subtitle>
          <S.Subtitle>Seguimento: Barbearia</S.Subtitle>
          <S.Subtitle>Tempo de entrega: 30 - 50 minutos</S.Subtitle>
        </div>

        <div className="mt-[20px] px-[30px]">
          <S.LabelInformation>Compartilhe e nos acompanhe</S.LabelInformation>

          <div className="flex flex-row mt-[15px]">
            {icons.map((item, index) => (
              <S.Icon key={index}>{item.icon}</S.Icon>
            ))}
          </div>
        </div>

        {showImage && (
          <ModalImage
            show={showImage}
            setShow={setShowImage}
            imageSelected={imageSelected}
          />
        )}
      </S.Container>
    </>
  );
};

export default DetailsModal;

const settings = {
  className: "slider variable-width",
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 2,
  variableWidth: true,
  nextArrow: (
    <S.ArrowRight>
      <ArrowRightSlider />
    </S.ArrowRight>
  ),
};
