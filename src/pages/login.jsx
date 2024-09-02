import { useState } from "react"
import { NavLink } from "react-router-dom"

function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Handle form submission by sending to an API
        console.log(formData)
    }

    return (
        <div className="flex flex-col justify-start items-center h-screen">
            <div className="flex flex-col justify-around items-center mt-[50px]">
                <div className="flex justify-around items-center bg-main-color rounded-full px-5 py-4 w-[60px]">
                    <img src="/logo_head.png" alt="logo" className="w-full" />
                </div>
                <p className="font-montserrat-medium text-[17px] mt-7">Welcome to Beryl</p>
                <p className="font-montserrat-regular mt-2 font-normal text-[14px]">Type your username and password to login</p>

                <form method="post" onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-col mt-4">
                        <label htmlFor="email" className="font-montserrat-regular text-[14px]">Email:</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="font-montserrat-regular text-[14px] bg-light-blue border-main-color border-solid border-2 rounded-md p-[3px]"
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="password" className="font-montserrat-regular text-[14px]">Password:</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="font-montserrat-regular text-[14px] bg-light-blue border-main-color border-solid border-2 rounded-md p-[3px]"
                        />
                    </div>
                    <button type="submit" className="w-full my-0 p-2 rounded-md bg-main-color text-white font-montserrat-medium tracking-wide hover:bg-hover duration-300">
                        Login
                    </button>
                </form>
                <p className="font-montserrat-regular text-[14px] mt-2">
                    Don't have account yet?
                    <NavLink to="/account/create" className="text-hover hover:text-main-color transition-all duration-300">
                        Create one
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Login;