import * as S from "./styles";
import LogoExample from "../../assets/images/logoExample.png";
import { useState } from "react";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <S.Container>
      <S.Header>
        <div className="relative">
          <S.CoverImage src={LogoExample} />
          <S.ProfileImage src={LogoExample} />
        </div>

        <div className="flex items-center justify-between px-[20px] py-[15px]">
          <div className="flex flex-col items-center">
            <S.CommerceName>Janderson Costa Studio</S.CommerceName>
            <S.CommerceType>Barbearia & Chopperia</S.CommerceType>
          </div>
          <S.TimeOpen open={open}>
            <S.Icon open={open} /> 09:00 ás 19:00
          </S.TimeOpen>
        </div>
      </S.Header>
    </S.Container>
  );
};

export default Home;
