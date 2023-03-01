import * as S from "./styles";
import Calendar from "react-calendar";
import { useState } from "react";

const CalendarCommerce: React.FC = () => {
  const [value, onChange] = useState(new Date());
  return (
    <S.Container>
      <Calendar
        defaultActiveStartDate={value}
        calendarType="US"
        onClickDay={(e) => console.log(e)}
        onChange={onChange}
        value={value}
      />
    </S.Container>
  );
};

export default CalendarCommerce;
