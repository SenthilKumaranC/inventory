import SideMenuItem from "../SideMenuItem/SideMenuItem"

const SideBar = () => {
  return (
    <div className="w-full h-full shadow-md grid grid-cols-1 auto-rows-max divide-y">
      <SideMenuItem value="tags">Category Management</SideMenuItem>
      <SideMenuItem value="products">Product Managment</SideMenuItem>
    </div>
  )
}

export default SideBar
