import { useEffect, useState } from "react"
import { useLoginPostMutation } from "../store/api"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const [loginPost, { data }] = useLoginPostMutation()
    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (data && data.token) {
            localStorage.setItem("token", data.token)
            navigate('/admin')
            window.location.reload()
        }
    }, [data, navigate])

    function loginSubmit(e) {
        e.preventDefault()
        loginPost({ login, password })
    }

    return (
        <main className="bg-[#F9FAFB]">
            <div className="h-[100vh] flex justify-center items-center">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={loginSubmit} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                            <input onChange={(e) => setLogin(e.target.value)} type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-800 outline-none" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-800 outline-none" />
                        </div>
                        <button type="submit" className="block w-full p-3 text-center rounded-md bg-[#191919] text-white">Sign in</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default LoginPage