import { blogDetails } from "../Hooks/useBlogOpen"
import Avatar from "./Avatar"


function Author({blog}:{blog:blogDetails}) {
  return (
    <div className="lg:col-span-1 col-span-2 flex flex-col justify-center items-center">
        <div>Author</div>
        <div>
            <div>
                <div className="flex items-center gap-2"><Avatar name={blog.author.name} /><div className="font-bold text-2xl">{blog.author.name}</div></div>
                <div className="text-gray-400">{blog.author.bio}</div>
            </div>
        </div>
    </div>
  )
}

export default Author