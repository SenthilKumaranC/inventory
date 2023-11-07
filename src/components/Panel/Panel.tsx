import { useNavigate } from "react-router-dom"

const Panel = (props: any) => {
  const cLen = props.children?.length
  const navigate = useNavigate()
  return (
    <div
      className={`w-full max-w-lg grid ${
        cLen === 3 ? "grid-rows-[50px_1fr_50px]" : "grid-rows-[50px_1fr]"
      } shadow-md`}
    >
      <div className="w-full h-full bg-gray-100 grid grid-cols-[1fr_1fr] items-center px-5 font-extrabold">
        <div className="w-full h-full flex items-center">
          {props.children[0]}
        </div>

        {props.showClose && (
          <button
            onClick={() => navigate(-1)}
            className="text-black font-semibold flex justify-end"
          >
            x
          </button>
        )}
      </div>
      <div className="w-full h-full bg-white">{props.children[1]}</div>
    </div>
  )
}

export default Panel
