import { FieldValues } from "react-hook-form"
import { IFormFieldInput } from "./formFieldInput.interface"
import { useContext } from "react"
import { FormContext } from "../Form/Form"

export interface IPasswordInput<T extends FieldValues> extends IFormFieldInput<T> {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}
const PasswordInput = <T extends FieldValues>(props: IPasswordInput<T>) => {
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
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            type="password"
            {...props.inputProps}
            {...form.register(name, { required: true })}
          ></input>
        </div>
      )}
    </>
  )
}

export default PasswordInput
