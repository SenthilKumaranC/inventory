import { FieldValues } from "react-hook-form"
import { IFormFieldInput } from "./formFieldInput.interface"
import { useContext } from "react"
import { FormContext } from "../Form/Form"

export interface ITextAreaInput<T extends FieldValues>
  extends IFormFieldInput<T> {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
}
const TextAreaInput = <T extends FieldValues>(props: ITextAreaInput<T>) => {
  const form = useContext(FormContext)
  const { name } = props
  return (
    <>
      {form && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={name}
            {...props.labelProps}
          ></label>
          <textarea
            rows={5}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            {...props.inputProps}
            {...form.register(name, { required: true })}
          ></textarea>
        </div>
      )}
    </>
  )
}

export default TextAreaInput
