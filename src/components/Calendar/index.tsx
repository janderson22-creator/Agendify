import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css";
import { useCommerce } from "../../context/commerce";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const formatDateObject = (date: Date) => {
  const options = {
    weekday: "short" as const,
    month: "short" as const,
    day: "2-digit" as const,
    year: "numeric" as const,
  };
  const formattedDate = date.toLocaleString("en-US", options);
  const [dayOnWeek, month, day, year] = formattedDate.split(" ");
  return { dayOnWeek, month, day, year };
};

const isDateDisabled = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const CalendarComponent: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  const { setFormattedDate } = useCommerce();

  useEffect(() => {
    if (value instanceof Date) {
      const formatted = formatDateObject(value);
      setFormattedDate(formatted);
    }
  }, [value]);

  return (
    <div className="w-full h-full rounded-[20px] relative">
      <Calendar
        onChange={setValue}
        value={value}
        tileDisabled={({ date }) => isDateDisabled(date)}
      />
    </div>
  );
};

export default CalendarComponent;
