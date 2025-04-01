import Avatar from "./Avatar"
import { Link } from "react-router-dom"

interface blogDetails  {
    Author:string,
    title:string,
    content:string,
    publishedDate:string,
    id:string
}


function Card({Author,title,content,publishedDate,id}:blogDetails) {

  const date = new Date(publishedDate)

  return (
    <Link to={`/blogread/${id}`}>
    <div className='py-10 border-b-1 border-b-gray-300 cursor-pointer'>
      <div className='flex items-center gap-2'><Avatar name={Author}/><span className='mr-2'>{Author}</span>.<span className='text-gray-600'>{date.toString().slice(0,10)}</span></div>
      <div className='font-bold lg:text-3xl text-xl'>{title}</div>
      <div className='text-gray-600 lg:text-xl text-sm'>{content.substring(0,100)+"..."}</div>
    </div>
    </Link>
  )
}



export default Card