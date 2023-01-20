import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/icons/arrowRight";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import Logo from "../../assets/images/logo.png";
import { useCommerce } from "../../context/commerce";
import * as S from "./styles";

const Menu: React.FC = () => {
  const [currentItem, setCurrentItem] = useState("Inicio");
  const [show, setShow] = useState(false);
  const { commerceId } = useCommerce();
  

  const items = useMemo(
    () => [
      {
        name: "Inicio",
        router: `/jandersonStudio/${commerceId}`,
        icon: <HomeIcon />,
      },
      {
        name: "Agendamentos",
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
    <S.Container show={show}>
      <div>
        <img src={Logo} alt="logo-img" />
      </div>
      <S.ItemsMenu>
        {items.map((item, index) => (
          <Link to={item.router} key={index}>
            <S.ContainerLink
              checked={item.name === currentItem}
              onClick={() => setCurrentItem(item.name)}
            >
              <S.Icon checked={item.name === currentItem}>{item.icon}</S.Icon>
              <S.NameLink show={show} checked={item.name === currentItem}>
                {item.name}
              </S.NameLink>
            </S.ContainerLink>
          </Link>
        ))}

        <S.ArrowButtonContainer onClick={() => setShow(!show)} show={show}>
          <S.ContainerIcon>
            <ArrowRightIcon />
          </S.ContainerIcon>
        </S.ArrowButtonContainer>
      </S.ItemsMenu>
    </S.Container>
  );
};

export default Menu;
