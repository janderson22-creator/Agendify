import CloseIcon from "../../../assets/icons/closeIcon.svg";
import Slider from "react-slick";
import * as S from "./styles";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRightSlider } from "../../../assets/icons/arrowRightSlider";
import { WhatsappIcon } from "../../../assets/icons/whatsappIcon";
import { EmailIcon } from "../../../assets/icons/emailIcon";
import { InstagramIcon } from "../../../assets/icons/instagramIcon";
import { PhoneIcon } from "../../../assets/icons/phoneIcon";
import ModalImage from "./modalImage";
import { useCommerce } from "../../../context/commerce";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsModal: React.FC<Props> = ({ show, setShow }) => {
  const [showImage, setShowImage] = useState(false);
  const [imageSelected, setImageSelected] = useState<any>();
  const { currentCommerce } = useCommerce()

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
        <div className="px-[10px] lg:px-[30px] xl:px-[30px]">
          <div
            onClick={() => setShow(false)}
            className="flex justify-end cursor-pointer"
          >
            <img src={CloseIcon} alt="" />
          </div>
          <div className="flex items-center justify-center mt-2">
            <S.TextAboutUs>Sobre nós</S.TextAboutUs>
          </div>
          <div className="mt-[20px]">
            <S.TextSub>
              {currentCommerce?.about.description}
            </S.TextSub>
          </div>
        </div>

        <S.ContainerCards>
          <Slider {...settings}>
            {currentCommerce?.about.images.map((item, index) => (
              <img
                className="cursor-pointer min-w-[75px] min-h-[75px] max-w-[80px] max-h-[80px] mr-3 rounded-[10px]"
                onClick={() => clickImage(item)}
                key={index}
                src="https://picsum.photos/200/300"
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
            {currentCommerce?.about.location}
          </S.Subtitle>
        </div>

        <div className="mt-[20px] px-[30px]">
          <S.LabelInformation>Dados sobre o estabelecimento</S.LabelInformation>
          <S.Subtitle>Seguimento: {currentCommerce?.type}</S.Subtitle>
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
