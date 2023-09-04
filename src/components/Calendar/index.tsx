import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css";

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

const CalendarComponent: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [formattedDate, setFormattedDate] = useState({
    dayOnWeek: "",
    month: "",
    day: "",
    year: "",
  });

  useEffect(() => {
    if (value instanceof Date) {
      const formatted = formatDateObject(value);
      setFormattedDate(formatted);
    }
  }, [value]);

  return (
    <div className="w-full h-full rounded-[20px] relative">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default CalendarComponent;
