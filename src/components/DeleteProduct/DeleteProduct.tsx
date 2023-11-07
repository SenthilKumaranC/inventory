import { useNavigate, useParams } from "react-router-dom"
import Modal from "../Modal/Modal"
import { useCallback } from "react"
import ConfirmationPanel from "../ConfirmationPanel/ConfirmationPanel"
import { useDeleteProductMutation } from "../../features/products/products.api"
import useNavigateBack from "../../hooks/useNavigateBack"

export interface IConfirmationPanelProps {
  title: string
  message: string
  ok: () => void
  cancel: () => void
}

const DeleteProduct = () => {
  const [deleteProduct] = useDeleteProductMutation()
  const params = useParams()

  const cancel = useNavigateBack()

  const ok = useCallback(() => {
    if (params?.id) {
      deleteProduct(params.id)
    }
    cancel()
  }, [cancel, deleteProduct, params.id])

  return (
    <ConfirmationPanel
      title={"Delete"}
      message="Do you want to delete?"
      ok={ok}
    ></ConfirmationPanel>
  )
}

export default DeleteProduct
