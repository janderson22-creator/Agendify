import { CloseIcon } from "../../assets/icons/closeIcon";
import ImageAboutUs1 from "../../assets/images/aboutUs1.png";
import ImageAboutUs2 from "../../assets/images/aboutUs2.png";
import ImageAboutUs3 from "../../assets/images/aboutUs3.png";
import Slider from "react-slick";
import * as S from "./styles";
import { useMemo } from "react";
import { ArrowRightIcon } from "../../assets/icons/arrowRight";
import { ArrowRightSlider } from "../../assets/icons/arrowRightSlider";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsMoldal: React.FC<Props> = ({ show, setShow }) => {
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

  return (
    <>
      {show && <S.Overlay onClick={() => setShow(false)} />}
      <S.Container show={show}>
        <div className="px-[30px]">
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
              <S.Card key={index} src={item.image} />
            ))}
          </Slider>
          <S.Shadow />
        </S.ContainerCards>
      </S.Container>
    </>
  );
};

export default DetailsMoldal;

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
  prevArrow: (
    <S.ArrowLeft>
      <ArrowRightIcon />
    </S.ArrowLeft>
  ),
};
