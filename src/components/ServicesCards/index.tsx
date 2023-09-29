import { Link } from "react-router-dom";
import IconService from "../../assets/icons/iconCardService.svg";
import { useCommerce } from "../../context/commerce";
import { joinSentence } from "../../utils/join-sentence";

interface Props {
  service: string;
  key: number;
}

const CardsServices: React.FC<Props> = ({ service, key }) => {
  const { currentCommerce } = useCommerce();

  return (
    <Link
      to={`/${joinSentence(currentCommerce?.name_establishment || "")}/${
        currentCommerce?.id
      }/schedules`}
      className="flex items-center rounded-[8px] bg-[#F0F0F5] text-[#7E7D80] text-sm font-semibold mr-2.5 last-of-type:mr-0 px-4 py-2 cursor-pointer"
      key={key}
    >
      {service}

      <img src={IconService} alt="" className="ml-2" />
    </Link>
  );
};

export default CardsServices;
