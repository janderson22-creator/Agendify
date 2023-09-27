import { useMemo, useState } from "react";
import Tooltip from "../../components/Base/tooltip";
import { Link } from "react-router-dom";
import { useCommerce } from "../../context/commerce";
import { joinSentence } from "../../utils/join-sentence";
import Skeleton from "../../components/Base/skeleton";
import InputSearch from "../../components/Base/input-search";

const Home: React.FC = () => {
  const { setCurrentCommerce, establishments, loadingEstablishments } =
    useCommerce();
  const [search, setSearch] = useState<string>("");
  const [hoverTooltips, setHoverTooltips] = useState<HoverTooltipsState>({});


  const filterEstablishments = useMemo(() => {
    if (search === "") {
      return establishments;
    } else {
      return establishments?.filter((item) =>
        item.name_establishment.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
  }, [search]);
  

  return (
    <div className="flex flex-col pt-8 h-full">
      <InputSearch
        value={search}
        setValue={setSearch}
        placeholder="Buscar Comércio"
      />

      <div className="flex mt-5">
        {filterEstablishments?.map((item, index) => {
          const handleMouseEnter = () => {
            setHoverTooltips((prevState) => ({
              ...prevState,
              [index]: true,
            }));
          };

          const handleMouseLeave = () => {
            setHoverTooltips((prevState) => ({
              ...prevState,
              [index]: false,
            }));
          };

          const isHovered = hoverTooltips[index] || false;

          return (
            <Skeleton
              style="w-[300px] h-[200px] ml-[10px] first-of-type:ml-0"
              loading={loadingEstablishments}
              key={index}
            >
              <Link
                onClick={() => setCurrentCommerce(item)}
                to={`/${joinSentence(item.name_establishment)}/${item.id}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer flex max-h-[200px] min-h-[200px] ml-3 first-of-type:ml-0"
              >
                <div className="rounded-l-[10px]">
                  <img
                    className="rounded-l-[10px] w-[120px] h-full object-cover"
                    src={item.avatar_url}
                    alt="profile_establishments"
                  />
                </div>

                <div className="flex flex-col px-4 pt-2 border border-[#D9D9DC] rounded-r-[10px]">
                  <span className="text-[#3F3F3F] font-bold min-w-[150px] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name_establishment}
                  </span>
                  <span className="text-[#8E8E92] text-sm">
                    {item.follow_up}
                  </span>
                </div>

                {isHovered && <Tooltip message={item.name_establishment} />}
              </Link>
            </Skeleton>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

interface HoverTooltipsState {
  [index: number]: boolean;
}
