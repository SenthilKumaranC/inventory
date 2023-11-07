import Panel from "../Panel/Panel"

const Modal = (props: any) => {
  const cLen = props.children?.length
  console.log(cLen, props.children)
  return (
    <div className="w-full h-full bg-black bg-opacity-30 absolute flex items-center justify-center">
      <Panel {...props}></Panel>
    </div>
  )
}

export default Modal
