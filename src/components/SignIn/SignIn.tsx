import { useForm, SubmitHandler } from "react-hook-form"
import { APP_ID } from "../../App"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { signInAction } from "../../features/auth/signIn.saga"

interface IFormInput {
  username: string
  password: string
}

const SignIn = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<IFormInput> = useCallback(
    (data) => {
      dispatch(signInAction(data.username, data.password))
    },
    [dispatch],
  )

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="******************"
            {...register("password", { required: true })}
          ></input>
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Thirsty Neurons. All rights reserved.
      </p>
    </div>
  )
}

export default SignIn
