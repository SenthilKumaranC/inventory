import { PropsWithChildren, useCallback } from "react"
import { useNavigate } from "react-router-dom"

export interface ISideMenuItem extends PropsWithChildren {
  value: string
}

const SideMenuItem = (props: ISideMenuItem) => {
  const { value } = props
  const navigate = useNavigate()

  const onSideMenuItemClick = useCallback(() => {
    navigate(value)
  }, [navigate, value])

  return (
    <div
      onClick={onSideMenuItemClick}
      className="h-10 flex items-center justify-center cursor-pointer"
    >
      {props.children}
    </div>
  )
}

export default SideMenuItem
