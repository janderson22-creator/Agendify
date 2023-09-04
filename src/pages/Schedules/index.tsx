import CalendarComponent from "../../components/Calendar";

const Schedules: React.FC = () => {
  return (
    <div className="pt-[60px]">
      <span className="text-[#FFF] text-[36px] font-bold">Janderson Costa Studio</span>
      <div className="w-full rounded-[10px] bg-[#8593A6] py-5 px-[72px] mt-[30px]">
          <p className="text-[#FFF] text-[30px] font-semibold">Selecione uma data e hora</p>
      </div>

      <div className="h-fit w-full rounded-[10px] bg-[#8593A6] py-5 px-4 mt-[30px]">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Schedules;
