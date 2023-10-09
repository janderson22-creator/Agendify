import React, { ChangeEvent, useEffect, useState } from "react";
import { useCommerce } from "../../context/commerce";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { setFormattedDate } = useCommerce();

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const currentDate = new Date();

    const Currentyear = currentDate.getFullYear();
    const Currentmonth = (currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const Currentday = currentDate.getDate().toString().padStart(2, "0");
    const formattedCurrentDate = `${Currentyear}-${Currentmonth}-${Currentday}`;

    if (selectedDate < formattedCurrentDate) {
      alert("Selecione uma data igual ou maior que hoje.");
      return;
    }

    const dateParts = selectedDate.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const dayOnWeek = getDayOfWeek(year, month, day);
    const monthName = getMonthName(parseInt(dateParts[1], 10));


    setFormattedDate((prevState) => ({
      ...prevState,
      date: selectedDate,
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
    return dayNames[dayIndex === 6 ? 0 : dayIndex + 1];
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
