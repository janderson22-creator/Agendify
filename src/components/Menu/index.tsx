import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import Logo from "../../assets/images/logo.png";
import { useCommerce } from "../../context/commerce";
import * as S from "./styles";
import classNames from "../../utils/className";

const Menu: React.FC = () => {
  const [currentItem, setCurrentItem] = useState("Inicio");
  const { commerceId } = useCommerce();

  const items = useMemo(
    () => [
      {
        name: "Inicio",
        router: `/`,
        icon: <HomeIcon />,
      },
      {
        name: "Agendar",
        router: `/jandersonStudio/${commerceId}/schedules`,
        icon: <SchedulesIcon />,
      },
      {
        name: "Produtos",
        router: `/jandersonStudio/${commerceId}/products`,
        icon: <ProductsIcon />,
      },
      {
        name: "Serviços",
        router: `/jandersonStudio/${commerceId}/services`,
        icon: <ServicesIcon />,
      },
    ],
    []
  );

  return (
    <S.Container>
      <div className="hidden lg:block xl:block mr-auto">
        <img className="max-w-[80px]" src={Logo} alt="logo-img" />
      </div>
      <div className="w-full flex items-center justify-around lg:justify-center lg:mr-auto">
        {items.map((item, index) => (
          <Link to={item.router} key={index}>
            <S.ContainerLink
              className="flex items-center justify-center rounded-[10px] lg:min-h-[40px] lg:min-w-[50px] lg:mx-5"
              checked={item.name === currentItem}
              onClick={() => setCurrentItem(item.name)}
            >
              <S.Icon checked={item.name === currentItem}>{item.icon}</S.Icon>
            </S.ContainerLink>
          </Link>
        ))}
      </div>
    </S.Container>
  );
};

export default Menu;
