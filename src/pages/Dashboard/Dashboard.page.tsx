import { Outlet } from "react-router-dom"
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader"
import SideBar from "../../components/SideBar/SideBar"

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[50px_1fr]">
      <div className="w-full h-full border-b-gray-800 border-solid border-2">
        <DashboardHeader></DashboardHeader>
      </div>
      <div className="w-full h-full grid grid-cols-[250px_1fr]">
        <div className="w-full h-ful">
          <SideBar></SideBar>
        </div>
        <div className="w-full h-full bg-gray-400">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
