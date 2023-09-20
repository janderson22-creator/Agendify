import { useState } from "react";
import Tooltip from "../../components/Base/tooltip";

const Home: React.FC = () => {
  return (
    <div className="flex items-center pt-4 h-full">
      {establishments.map((item, index) => {
        const [hoverTooltip, setHoverTooltip] = useState(false);

        return (
          <div
            onMouseEnter={() => setHoverTooltip(true)}
            onMouseLeave={() => setHoverTooltip(false)}
            className="relative cursor-pointer flex max-h-[200px] min-h-[200px] ml-3 first-of-type:ml-0"
            key={index}
          >
            <div className="rounded-l-[10px]">
              <img
                className="rounded-l-[10px] w-[120px] h-full object-cover"
                src="https://picsum.photos/200/300"
                alt="profile_establishments"
              />
            </div>

            <div className="flex flex-col px-4 pt-2 border border-[#D9D9DC] rounded-r-[10px]">
              <span className="text-[#3F3F3F] font-bold min-w-[150px] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">
                {item.name_establishments}
              </span>
              <span className="text-[#8E8E92] text-sm">{item.follow_up}</span>
            </div>
            
            {hoverTooltip && (
              <Tooltip message={item.name_establishments} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;

const establishments = [
  {
    id: 1,
    name_establishments: "Janderson Costa Studio",
    type: "Estetica",
    follow_up: "Barbearia",
  },
  {
    id: 2,
    name_establishments: "Rejane Cabelos",
    type: "Estetica",
    follow_up: "Cabelereira",
  },
];
