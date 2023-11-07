import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const useNavigateBack = (cancelCallback?: any) => {
  const navigate = useNavigate()

  const cancel = useCallback(() => {
    navigate(-1)
    cancelCallback && cancelCallback()
  }, [cancelCallback, navigate])

  return cancel
}

export default useNavigateBack
