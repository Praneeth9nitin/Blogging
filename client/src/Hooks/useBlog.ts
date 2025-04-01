import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import { blogDetails } from "./useBlogOpen"

export function useBlogs() {
    const [loading,setLoading] = useState(true)
    const [blogs,setBlogs] = useState<blogDetails[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(res=>{
            setBlogs(res.data.blogs)
            setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}
