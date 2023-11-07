import SignIn from "../../components/SignIn/SignIn"

const AuthPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-500">
      <SignIn></SignIn>
      <p className="text-center text-black text-xs absolute bottom-2 left-2">
        &copy;2023 Thirsty Neurons. All rights reserved.
      </p>
    </div>
  )
}

export default AuthPage
