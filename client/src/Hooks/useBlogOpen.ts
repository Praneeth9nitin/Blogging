import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface blogDetails {
    id: string
    title:string,
    content:string,
    postTime:string,
    author:{
        name:string,
        bio:string
    }
}

function useBlogOpen({id}:{id:string}){
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState<blogDetails>()
    

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setBlog(res.data.blog)
            setLoading(false)
        })
    },[id])

    return{
        loading,
        blog
    }
}

export default useBlogOpen