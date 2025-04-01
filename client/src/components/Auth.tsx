import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Auth({ type }:{ type: "signup" | "signin" }) {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [inputs, setInputs] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    })

    async function sendRequest(){
        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`,inputs)
            const token = res.data.token
            localStorage.setItem("token","Bearer "+token)
            setLoading(!loading)
            navigate("/blogs")
        }catch(e){
            console.log(e)
        }
    }
    
  return (
    <div className="h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col items-center">
            <div className="text-3xl font-bold"> {type==="signin"?"Welcome back":"Create an account"} </div>
            <div> {type==="signin"?"Don't have a account?":"Already have a account?"} <Link to={type==="signin"?"/signup":"/signin"} className="underline" >{type==="signin"?"signup":"login"}</Link></div>
        </div>
        <div className="w-1/2 pt-7">
            {type==='signup'?<Inputs label="Username" placeholder="Enter your name" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    name:e.target.value
                })
            }} />:<div/>}
            <Inputs label="Email" placeholder="mail@email.com" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    username:e.target.value
                })
            }} />
            <Inputs label="Password" type="password" placeholder="" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    password:e.target.value
                })
            }} />
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full" onClick={sendRequest}>{loading ? "loading..." : (type==='signin'?"Sign In":"Sign Up")}</button>
        </div>
    </div>
  )
}

interface inputs {
    label:string,
    placeholder:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}

function Inputs({label, placeholder, onChange, type}:inputs){
    return (
        <div className="pb-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 "> {label} </label>
        <input onChange={onChange} type={type||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
    )
}

export default Auth