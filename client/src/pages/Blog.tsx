import BlogsSkeleton from "../components/BlogsSkeleton"
import Card from "../components/Card"
import Create from "../components/Create"
import Nav from "../components/Nav"
import { useBlogs } from "../Hooks/useBlog"

function Blog() {
  const {loading,blogs} = useBlogs()
  
  return (
    <div className="m-10 ">
      <Nav/>
      {loading? Array(5).fill(0).map((e,i)=>
          <BlogsSkeleton key={i} />
      ) :blogs.map((e,i)=>
          <Card key={i} id={e.id} Author={e.author.name} title={e.title} content={e.content} publishedDate={e.postTime} />
      )}
      <Create />
    </div>
  )
}


export default Blog


