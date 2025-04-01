import { blogDetails } from "../Hooks/useBlogOpen"



function Blog({blog}:{blog:blogDetails}) {

  const date = new Date(blog.postTime)

  return (
    <div className="lg:col-span-2 col-span-3">
        <div>
            <div className="lg:text-6xl text-2xl  font-bold">{blog.title}</div>
            <div className="text-gray-400">{date.toString().slice(0,21)}</div>
        </div>
        <div className="text-gray-900 mt-6">{blog.content}</div>
    </div>
  )
}

export default Blog