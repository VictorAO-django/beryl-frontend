import { useState } from "react";
import { NavLink } from "react-router-dom";
import { pwdMatch, checkPasswordStrength } from "./utils";

function Create(){
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //check password match
        if (pwdMatch(formData.password, formData.password2)){
            //Check password strength
            if (checkPasswordStrength(formData.password)){

            }
        }else{
            
        }
        //Handle form submission by sending to an API
        console.log(formData)
    }



    return (
        <div className="flex flex-col items-center justify-start h-screen">
            <div className="flex flex-col justify-around items-center mt-[50px]">
                <div className="flex justify-around items-center bg-main-color rounded-full px-5 py-4 w-[60px]">
                    <img src="/logo_head.png" alt="logo" className="w-full" />
                </div>
                <p className="font-montserrat-medium text-[17px] mt-7">Lets get started by creating your account</p>
                <p className="font-montserrat-regular mt-2 font-normal text-[14px]">To keep your account safe, we need a strong password and a unique username</p>

                <form method="post" onSubmit={handleSubmit} className="w-full mt-3">
                    <div className="flex items-center justify-start">
                        <div className="flex flex-col mt-4 mr-[20px] grow">
                            <label htmlFor="first_name" className="font-montserrat-regular text-[14px]">First name:</label>
                            <input 
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="font-montserrat-regular text-[14px] bg-light-blue border-main-color border-solid border-2 rounded-md p-[3px]"
                            />
                        </div>
                        <div className="flex flex-col mt-4 grow">
                            <label htmlFor="last_name" className="font-montserrat-regular text-[14px]">Last name:</label>
                            <input 
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="font-montserrat-regular text-[14px] bg-light-blue border-main-color border-solid border-2 rounded-md p-[3px]"
                            />
                        </div>
                    </div>
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
                    <div className="flex flex-col my-2">
                        <label htmlFor="password2" className="font-montserrat-regular text-[14px]">Confirm password:</label>
                        <input 
                            type="password"
                            id="password2"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            className="font-montserrat-regular text-[14px] bg-light-blue border-main-color border-solid border-2 rounded-md p-[3px]"
                        />
                    </div>
                    <button type="submit" className="w-full p-2 my-0 mt-3 tracking-wide text-white duration-300 rounded-md bg-main-color font-montserrat-medium hover:bg-hover">
                        Create
                    </button>
                </form>
                <p className="font-montserrat-regular text-[14px] mt-2">
                    Already have an account?
                    <NavLink to="/account/login" className="transition-all duration-300 text-hover hover:text-main-color">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Create;