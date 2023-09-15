interface Props {
  message: string
}

const Tooltip: React.FC<Props> = ({message}) => {
  return (
    <div className="text-[#FFF] rounded-[10px] bg-[#222224] absolute left-0 right-0 w-fit mx-auto -bottom-14 py-2 px-2">
      {message}
    </div>
  )
}

export default Tooltip;