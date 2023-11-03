import SideMenuItem from "../SideMenuItem/SideMenuItem"

const SideBar = () => {
  return (
    <div className="w-full h-full shadow-md grid grid-cols-1 auto-rows-max divide-y">
      <SideMenuItem value="tags">Tags</SideMenuItem>
      <SideMenuItem value="products">Products</SideMenuItem>
    </div>
  )
}

export default SideBar
