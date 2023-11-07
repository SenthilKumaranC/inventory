import { useNavigate } from "react-router-dom"
import Modal from "../Modal/Modal"
import { useCallback } from "react"
import useNavigateBack from "../../hooks/useNavigateBack"

export interface IConfirmationPanelProps {
  title: string
  message: string
  ok: () => void
  cancel?: () => void
}

const ConfirmationPanel = (props: IConfirmationPanelProps) => {
  const navigate = useNavigate()

  const cancel = useNavigateBack(props.cancel)

  return (
    <Modal>
      {props.title}
      <div>{props.message}</div>
      <div>
        <button onClick={props.ok}>OK</button>
        <button onClick={cancel}>Cancel</button>
      </div>
    </Modal>
  )
}

export default ConfirmationPanel
