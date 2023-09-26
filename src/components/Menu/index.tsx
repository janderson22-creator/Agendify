import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { ProductsIcon } from "../../assets/icons/productsIcon";
import { SchedulesIcon } from "../../assets/icons/schedulesIcon";
import { ServicesIcon } from "../../assets/icons/services";
import { useCommerce } from "../../context/commerce";
import * as S from "./styles";
import { joinSentence } from "../../utils/join-sentence";
import classNames from "../../utils/className";
import { CommerceIcon } from "../../assets/icons/commerce";

const Menu: React.FC = () => {
  const { currentCommerce, setCurrentCommerce } = useCommerce();
  const location = useLocation();
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  const items = useMemo(
    () => [
      {
        name: "home",
        link: `/`,
        icon: <HomeIcon />,
        show: true,
        checked: pathname === "/",
      },
      {
        name: "commerce",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }`,
        icon: <CommerceIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
        checked: pathname.split("/").length === 3,
      },
      {
        name: "schedules",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/schedules`,
        icon: <SchedulesIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
        checked: pathname.includes("schedules"),
      },
      {
        name: "products",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/products`,
        icon: <ProductsIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
        checked: pathname.includes("products"),
      },
      {
        name: "services",
        link: `/${joinSentence(currentCommerce?.name_establishment || "")}/${
          currentCommerce?.id
        }/services`,
        icon: <ServicesIcon />,
        show:
          currentCommerce &&
          Object.keys(currentCommerce).length > 0 &&
          location.pathname !== "/"
            ? true
            : false,
        checked: pathname.includes("services"),
      },
    ],
    [pathname, location.pathname, currentCommerce]
  );

  return (
    <S.Container>
      <div className="w-full flex items-center justify-around lg:justify-center lg:mr-auto">
        {items.map((item, index) => (
          <Link
            onClick={() =>
              item.name === "inicio" &&
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
                item.checked ? "" : ""
              )}
            >
              <S.Icon checked={item.checked}>{item.icon}</S.Icon>
            </S.ContainerLink>
          </Link>
        ))}
      </div>
    </S.Container>
  );
};

export default Menu;
