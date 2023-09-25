import { useState } from "react";
import Tooltip from "../../components/Base/tooltip";
import { Link } from "react-router-dom";
import { useCommerce } from "../../context/commerce";
import { joinSentence } from "../../utils/join-sentence";
import Skeleton from "../../components/Base/skeleton";

const Home: React.FC = () => {
  const { setCurrentCommerce, establishments, loadingEstablishments } =
    useCommerce();

  return (
    <div className="flex items-center pt-4 h-full">
      {establishments?.map((item, index) => {
        const [hoverTooltip, setHoverTooltip] = useState(false);

        return (
          <Skeleton style="w-[300px] h-[200px] ml-[10px] first-of-type:ml-0" loading={loadingEstablishments}>
            <Link
              onClick={() => setCurrentCommerce(item)}
              to={`/${joinSentence(item.name_establishment)}/${item.id}`}
              onMouseEnter={() => setHoverTooltip(true)}
              onMouseLeave={() => setHoverTooltip(false)}
              className="relative cursor-pointer flex max-h-[200px] min-h-[200px] ml-3 first-of-type:ml-0"
              key={index}
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
                <span className="text-[#8E8E92] text-sm">{item.follow_up}</span>
              </div>

              {hoverTooltip && <Tooltip message={item.name_establishment} />}
            </Link>
          </Skeleton>
        );
      })}
    </div>
  );
};

export default Home;
