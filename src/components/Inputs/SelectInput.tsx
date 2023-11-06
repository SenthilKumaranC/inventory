import { FieldValues } from "react-hook-form"
import { IFormFieldInput } from "./formFieldInput.interface"
import { useContext } from "react"
import { FormContext } from "../Form/Form"

export interface INumeriInput<T extends FieldValues>
  extends IFormFieldInput<T> {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
}

export const getOptions = (options: any) => {
  return options.map((option: string) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))
}
const SelectInput = <T extends FieldValues>(props: INumeriInput<T>) => {
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
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            {...form.register(name, { required: true })}
            {...props.inputProps}
          ></select>
        </div>
      )}
    </>
  )
}

export default SelectInput
