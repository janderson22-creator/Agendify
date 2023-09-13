import classNames from "../../../utils/className";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalEmployees: React.FC<Props> = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <div
          className="bg-[#000] opacity-40 w-full h-full fixed top-0 bottom-0 left-0 right-0 z-[2] "
          onClick={() => setShow(false)}
        />
      )}
      <div
        className={classNames(
          "bg-[#FFF] m-auto fixed top-0 bottom-0 left-0 right-0 w-[900px] h-[900px] rounded-[10px] z-[3]",
          show ? "fromTop" : ""
        )}
      >
        <p>Escolha com qual funcionario deseja fazer o serviço</p>
      </div>
    </>
  );
};

export default ModalEmployees;
