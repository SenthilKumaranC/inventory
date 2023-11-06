import { PropsWithChildren, createContext, useCallback } from "react"
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form"

export const FormContext = createContext<UseFormReturn<
  FieldValues,
  any,
  undefined
> | null>(null)

export interface IFormProps extends PropsWithChildren {
  onSubmit: SubmitHandler<FieldValues>
}

const Form = (props: IFormProps) => {
  const form = useForm<FieldValues>()

  const { onSubmit } = props

  return (
    <FormContext.Provider value={form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {props.children}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </FormContext.Provider>
  )
}

export default Form
