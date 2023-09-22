import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import { useCommerce } from "../../context/commerce";
import * as S from "./styles";
import { joinSentence } from "../../utils/join-sentence";
import classNames from "../../utils/className";
import Establishment from "../../pages/establishment";

const Menu: React.FC = () => {
  const [currentItem, setCurrentItem] = useState("Inicio");
  const { currentCommerce, setCurrentCommerce } = useCommerce();

  const items = useMemo(
    () => [
      {
        name: "Inicio",
        router: `/`,
        icon: <HomeIcon />,
        show: true,
      },
      {
        name: "Agendar",
        router: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/schedules`,
        icon: <SchedulesIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
      },
      {
        name: "Produtos",
        router: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/products`,
        icon: <ProductsIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
      },
      {
        name: "Serviços",
        router: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/services`,
        icon: <ServicesIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
      },
    ],
    [location.pathname, setCurrentCommerce]
  );

  return (
    <S.Container>
      <div className="w-full flex items-center justify-around lg:justify-center lg:mr-auto">
        {items.map((item, index) => (
          <Link
            onClick={() =>
              setCurrentCommerce({
                id: null,
                name_establishment: "",
                avatar_url: "",
                cover_img: "",
                type: "",
                follow_up: "",
              })
            }
            to={item.router}
            key={index}
          >
            <S.ContainerLink
              className={classNames(
                "items-center justify-center rounded-[10px] lg:min-h-[40px] lg:min-w-[50px] lg:mx-5",
                item.show ? "flex" : "hidden"
              )}
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
