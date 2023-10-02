import { useEffect, useMemo, useState } from "react";
import InputSearch from "../../components/Base/input-search";
import classNames from "../../utils/className";
import { useCommerce } from "../../context/commerce";

const Products: React.FC = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const { currentCommerce, fetchEstablishmentsById } = useCommerce();

  useEffect(() => {
    if (currentCommerce) return;

    const id = location.pathname.split("/")[2];

    fetchEstablishmentsById(id);
  }, []);

  const filterProducts = useMemo(() => {

    if (searchProduct === "") {
      return currentCommerce?.products;
    } else {
      return currentCommerce?.products.filter((product) =>
        product.product_name
          .toLocaleLowerCase()
          .includes(searchProduct.toLocaleLowerCase())
      );
    }
  }, [searchProduct, currentCommerce]);

  return (
    <div className="mt-7">
      <InputSearch
        value={searchProduct}
        setValue={setSearchProduct}
        placeholder="Buscar produto"
      />

      <div className="flex items-center mt-4 pl-3 bg-[#F0F0F5] py-4 rounded-t-[10px]">
        {tableHead.map((item, index) => (
          <span
            className="text-[#7E7D80] text-sm font-semibold"
            key={index}
            style={{ width: item.width }}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="flex flex-col">
        {filterProducts?.map((product, index) => (
          <div
            key={index}
            className={classNames(
              "border-b border-l border-r border-[#EBEBF0] flex items-center text-[#141616] font-semibold py-4 cursor-pointer hover:bg-[#eeebf54d]"
              // employeer.name === formattedDate.name_employee
              //   ? "bg-[#25DD3733]"
              //   : "hover:bg-[#eeebf54d]"
            )}
          >
            <span className="w-[20%] pl-3">{index + 1}</span>
            <div className="w-[30%]">
              <img
                src={product.product_url}
                alt="schedules_app"
                className="w-[60px] h-[60px] rounded-[10px] object-cover"
              />
            </div>
            <span className="w-[30%]">{product.product_name}</span>
            <span className="w-[21%]">{product.value}</span>
            
             <div className="flex items-center justify-center px-2 py-2 rounded-[10px] border border-[#738cbf] absolute right-12 text-[#7E7D80] text-sm font-semibold">
                Comprar
             </div> 

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

const tableHead = [
  {
    name: "#",
    width: "20%",
  },
  {
    name: "Foto",
    width: "30%",
  },
  {
    name: "Produto",
    width: "30%",
  },
  {
    name: "Valor",
    width: "22%",
  },
];
