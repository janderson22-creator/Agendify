import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import { useCommerce } from "../../context/commerce";
import * as S from "./styles";
import { joinSentence } from "../../utils/join-sentence";
import classNames from "../../utils/className";

const Menu: React.FC = () => {
  const { currentCommerce, setCurrentCommerce } = useCommerce();

  const items = useMemo(
    () => [
      {
        name: "Inicio",
        link: `/`,
        icon: <HomeIcon />,
        show: true,
        routes: [""],
      },
      {
        name: "Agendar",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/schedules`,
        routes: ["/:name/:id/schedules"],
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
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/products`,
        routes: ["/:name/:id/products"],
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
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/services`,
        routes: ["/:name/:id/services"],
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

  const verifyRouterTradings = useCallback(
    (routes: string[]) => {
      for (const route of routes) {
        const regex = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
        if (location.pathname === "/") {
          return true;
        } else {
          if (regex.test(location.pathname)) {
            return true;
          }
        }
      }

      return false;
    },
    [location.pathname]
  );

  return (
    <S.Container>
      <div className="w-full flex items-center justify-around lg:justify-center lg:mr-auto">
        {items.map((item, index) => (
          <Link
            onClick={() =>
              setCurrentCommerce({
                id: "",
                name_establishment: "",
                avatar_url: "",
                cover_url: "",
                type: "",
                follow_up: "",
              })
            }
            to={item.link}
            key={index}
          >
            <S.ContainerLink
              className={classNames(
                "items-center justify-center rounded-[10px] lg:min-h-[40px] lg:min-w-[50px] lg:mx-5",
                item.show ? "flex" : "hidden",
                verifyRouterTradings(item.routes) ? "" : ""
              )}
            >
              <S.Icon checked={verifyRouterTradings(item.routes)}>
                {item.icon}
              </S.Icon>
            </S.ContainerLink>
          </Link>
        ))}
      </div>
    </S.Container>
  );
};

export default Menu;
