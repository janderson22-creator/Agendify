import { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { ArrowRightIcon } from "../../assets/icons/arrowRight";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import Logo from '../../assets/images/logo.png'
import * as S from "./styles";

const Menu: React.FC = () => {
  const history = useHistory();
  const [currentItem, setCurrentItem] = useState("Inicio");
  const [show, setShow] = useState(false);
  const items = useMemo(
    () => [
      {
        name: "Inicio",
        router: `/`,
        icon: <HomeIcon />,
      },
      {
        name: "Agendamentos",
        router: `/agendamentos`,
        icon: <SchedulesIcon />,
      },
      {
        name: "Produtos",
        router: `/produtos`,
        icon: <ProductsIcon />,
      },
      {
        name: "Serviços",
        router: `/servicos`,
        icon: <ServicesIcon />,
      },
    ],
    []
  );

  const selectItem = useCallback(
    (itemClicked: string, router: string) => {
      setCurrentItem(itemClicked);
      history.push(router);
    },
    [history]
  );

  return (
    <S.Container show={show}>
      <div>
        <img src={Logo} alt="logo-img" />
      </div>
      <S.ItemsMenu>
        {items.map((item, index) => (
          <S.ContainerLink
            key={index}
            checked={item.name === currentItem}
            onClick={() => selectItem(item.name, item.router)}
          >
            <S.Icon checked={item.name === currentItem}>{item.icon}</S.Icon>
            <S.NameLink show={show} checked={item.name === currentItem}>
              {item.name}
            </S.NameLink>
          </S.ContainerLink>
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
