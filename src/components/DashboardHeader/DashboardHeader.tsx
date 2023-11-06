import { useCallback } from "react"
import { logOutActionThunk } from "../../features/auth/auth.slice"
import { useAppDispatch } from "../../app/hooks"

const DashboardHeader = () => {
  const dispatch = useAppDispatch()

  const logOutHandler = useCallback(() => {
    dispatch(logOutActionThunk())
  }, [dispatch])

  return (
    <div className="w-full h-full px-5 grid grid-cols-[300px_1fr_100px] justify-center items-center">
      <span className=" font-extrabold text-2xl text-indigo-400">
        Inventory Manager
      </span>
      <div></div>

      <button
        onClick={logOutHandler}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log out
      </button>
    </div>
  )
}

export default DashboardHeader
