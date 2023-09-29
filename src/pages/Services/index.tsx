import { useEffect, useMemo, useState } from "react";
import { useCommerce } from "../../context/commerce";
import CardsServices from "../../components/ServicesCards";
import InputSearch from "../../components/Base/input-search";

const Services: React.FC = () => {
  const { currentCommerce, fetchEstablishmentsById } = useCommerce();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (currentCommerce) return;

    const id = location.pathname.split("/")[2];

    fetchEstablishmentsById(id);
  }, []);

  const filterServices = useMemo(() => {
    if (search === "") {
      return currentCommerce?.services;
    } else {
      return currentCommerce?.services.filter((f) =>
        f.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
  }, [search,currentCommerce]);

  return (
    <div className="mt-7">
      <InputSearch
        value={search}
        setValue={setSearch}
        placeholder="Buscar Serviço"
      />

      <div className="flex items-center mt-7">
        {filterServices?.map((service, key) => (
          <CardsServices service={service} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Services;
