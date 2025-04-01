import { useParams } from "react-router-dom"
import Author from "../components/Author"
import Blog from "../components/Blog"
import useBlogOpen from "../Hooks/useBlogOpen"  
import { memo } from "react"
import BlogSkelton from "../components/BlogSkelton"

const DisplayBlogs=memo(()=> {
    const {id} = useParams()
    const {loading,blog} = useBlogOpen({
        id:id||""
    })
    if(loading){
      return(
        <BlogSkelton />
      )
    }
    
  return (
    <div className="grid grid-cols-3 m-10 gap-24">
        {blog && <Blog blog={blog} />}
        {blog && <Author blog={blog} />}
    </div>
  )
})

export default DisplayBlogs