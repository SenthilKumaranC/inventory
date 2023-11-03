import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[50px_1fr]">
      <div className="w-full h-full">
        <Header></Header>
      </div>
      <div className="w-full h-full grid grid-cols-[250px_1fr]">
        <div className="w-full h-full bg-gray-100">
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
