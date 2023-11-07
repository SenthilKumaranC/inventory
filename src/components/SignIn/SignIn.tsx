import { SubmitHandler, FieldValues } from "react-hook-form"
import { useCallback } from "react"
import { signInAction } from "../../features/auth/signIn.saga"
import { useAppDispatch } from "../../app/hooks"
import Form from "../Form/Form"
import TextInput from "../Inputs/TextInput"
import PasswordInput from "../Inputs/PasswordInput"
import { logInActionThunk } from "../../features/auth/auth.slice"
import Modal from "../Modal/Modal"
import Panel from "../Panel/Panel"

interface ICredential {
  username: string
  password: string
}

const UsernameInput = TextInput<ICredential>
const PasswordTextInput = PasswordInput<ICredential>

const SignIn = () => {
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    (data) => {
      dispatch(
        logInActionThunk({ username: data.username, password: data.password }),
      )
    },
    [dispatch],
  )

  return (
    <div className="w-full max-w-xs flex flex-col gap-5">
      <Panel>
        Login
        <Form
          onSubmit={onSubmit}
          submitText="Login"
          formProps={{ className: "bg-white" }}
        >
          <UsernameInput
            name="username"
            inputProps={{
              placeholder: "Enter user Name",
            }}
            labelProps={{
              children: "User Name",
            }}
          />
          <PasswordTextInput
            name="password"
            inputProps={{
              placeholder: "Enter password Name",
            }}
            labelProps={{
              children: "Password",
            }}
          />
        </Form>
      </Panel>
      <p className="text-center text-black text-xs">
        &copy;2023 Thirsty Neurons. All rights reserved.
      </p>
    </div>
  )
}

export default SignIn
