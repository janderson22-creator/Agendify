import React, { ChangeEvent, useEffect, useState } from "react";
import { useCommerce } from "../../context/commerce";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { formattedDate, setFormattedDate } = useCommerce();

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const dateParts = selectedDate.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const dayOnWeek = getDayOfWeek(year, month, day);
    const monthName = getMonthName(parseInt(dateParts[1], 10));

    setFormattedDate((prevState) => ({
      ...prevState,
      day,
      dayOnWeek,
      month: monthName,
      year,
    }));

    setSelectedDate(selectedDate);
  };

  const getDayOfWeek = (year: string, month: string, day: string) => {
    const date = new Date(`${year}-${month}-${day}`);
    const dayIndex = date.getDay();
    const dayNames = [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ];
    return dayNames[dayIndex + 1];
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

const getMonthName = (monthNumber: number) => {
  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return monthNames[monthNumber - 1];
};
