import LoginPage from "../pages/LoginPage"

function Auth({ children }) {
    const token = localStorage.getItem("token")

    return (
        <>
            {token ? children : <LoginPage />}
        </> 
  )
}

export default Auth