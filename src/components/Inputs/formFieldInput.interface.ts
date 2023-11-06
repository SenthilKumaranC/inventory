import { FieldValues, Path } from "react-hook-form"

export interface IFormFieldInput<T extends FieldValues> {
  name: Path<T>
  labelProps: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
}
