import TextInput from "../Inputs/TextInput"
import NumericInput from "../Inputs/NumericInput"
import Form from "../Form/Form"
import { useCallback } from "react"
import { FieldValues } from "react-hook-form"
import TextAreaInput from "../Inputs/TextAreaInput"
import SelectInput, { getOptions } from "../Inputs/SelectInput"
import SingleSelectInput, { getRadioOptions } from "../Inputs/SingleSelectInput"
import { useAddProductMutation } from "../../features/products/products.api"

type RateType = "constant" | "variable"
export type IProduct = {
  name: string
  description: string
  totalQuantity: number
  unit: string
  minimumSellableQuantity: number
  pricePerMinimumSellableQuantity: number
  rateType: RateType
}
const ProductTextInput = TextInput<IProduct>
const ProductNumericInput = NumericInput<IProduct>
const ProductTextAreaInput = TextAreaInput<IProduct>
const ProductSelectInput = SelectInput<IProduct>
const ProductSingleOptionInput = SingleSelectInput<IProduct>
const ProductForm = () => {
  const [addProduct] = useAddProductMutation()
  const onSubmit = useCallback(
    (data: FieldValues) => {
      const newProduct = data as IProduct
      addProduct(newProduct)
    },
    [addProduct],
  )

  return (
    <div className="w-full h-full bg-black bg-opacity-30 flex items-center justify-center absolute">
      <div className="w-full max-w-lg">
        <Form onSubmit={onSubmit}>
          <ProductTextInput
            name="name"
            inputProps={{
              placeholder: "Enter Product Name",
            }}
            labelProps={{
              children: "Product Name",
            }}
          ></ProductTextInput>

          <ProductTextAreaInput
            name="description"
            inputProps={{
              placeholder: "Enter Product Description",
            }}
            labelProps={{
              children: "Product Description",
            }}
          ></ProductTextAreaInput>

          <ProductNumericInput
            name="totalQuantity"
            inputProps={{
              placeholder: "Enter Product Quantity",
            }}
            labelProps={{
              children: "Product Quantity",
            }}
          ></ProductNumericInput>

          <ProductSelectInput
            name="unit"
            inputProps={{
              children: getOptions(["kilogram", "liter", "piece"]),
            }}
            labelProps={{
              children: "Product Unit",
            }}
          ></ProductSelectInput>
          <ProductSingleOptionInput
            name="rateType"
            inputProps={{
              children: getRadioOptions(["Constant", "Variable"], "rateType"),
            }}
            labelProps={{
              children: "Product Rate Type",
            }}
          ></ProductSingleOptionInput>
        </Form>
      </div>
    </div>
  )
}

export default ProductForm
