import { FieldValues } from "react-hook-form"
import { IFormFieldInput } from "./formFieldInput.interface"
import { PropsWithChildren, useContext } from "react"
import { FormContext } from "../Form/Form"

export interface ISingleSelectInput<T extends FieldValues>
  extends IFormFieldInput<T>,
    PropsWithChildren {
  inputProps?: PropsWithChildren
}

export const getRadioOptions = (options: any, groupName: string) => {
  return options.map((option: any) => {
    return (
      <div className="grid grid-cols-[20px_1fr] gap-2" key={option}>
        <input id={option} type="radio" value={option} name={groupName}></input>
        <label
          className="h-full text-gray-700 text-sm font-bold mb-2"
          htmlFor={option}
        >
          <span className="h-full flex items-center justify-start">
            {option}
          </span>
        </label>
      </div>
    )
  })
}
const SingleSelectInput = <T extends FieldValues>(
  props: ISingleSelectInput<T>,
) => {
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
          <div className="h-max flex flex-row gap-3">
            {props.inputProps?.children}
          </div>
        </div>
      )}
    </>
  )
}

export default SingleSelectInput
