import React, { ChangeEvent, useEffect, useState } from "react";
import { useCommerce } from "../../context/commerce";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { formattedDate, setFormattedDate } = useCommerce();

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split("T")[0];

    const dateObject = new Date(selectedDate);

    if (selectedDate >= currentDate) {
      setSelectedDate(selectedDate);

      const dayOnWeek = dateObject.toLocaleDateString("pt-br", {
        weekday: "long",
      });
      const month = dateObject.toLocaleDateString("pt-br", { month: "long" });
      const day = dateObject.toLocaleDateString("pt-br", { day: "numeric" });
      const year = dateObject.toLocaleDateString("pt-br", { year: "numeric" });

      setFormattedDate((prevFormattedDate) => ({
        ...prevFormattedDate,
        dayOnWeek,
        month,
        day,
        year,
      }));
    } else {
      alert("Não é possível selecionar uma data anterior à data atual.");
    }
  };

  return (
    <input
      className="border border-[#EBEBF0]  rounded-[10px] px-4 py-1 text-[#5C6666] text-[18px]"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;
