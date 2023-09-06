const formatMonth = (month: string) => {
  switch (month) {
    case "Jan":
      return "Janeiro";
    case "Feb":
      return "Fevereiro";
    case "Mar":
      return "Março";
    case "Apr":
      return "Abril";
    case "May":
      return "Maio";
    case "Jun":
      return "Junho";
    case "Jul":
      return "Julho";
    case "Aug":
      return "Agosto";
    case "Sep":
      return "Setembro";
    case "Oct":
      return "Outubro";
    case "Nov":
      return "Novembro";
    case "Dec":
      return "Dezembro";
    default:
      return "Mês não reconhecido";
  }
};

export default formatMonth;
