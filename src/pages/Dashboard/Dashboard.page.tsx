import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[50px_1fr]">
      <div className="w-full h-full border-b-gray-800 border-solid border-2">
        <Header></Header>
      </div>
      <div className="w-full h-full grid grid-cols-[250px_1fr]">
        <div className="w-full h-full">
          <SideBar></SideBar>
        </div>
        <div className="w-full h-full bg-gray-400 p-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
