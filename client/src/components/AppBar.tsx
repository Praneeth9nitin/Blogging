import Avatar from "./Avatar"
import { useNavigate } from "react-router-dom"

function AppBar() {
  const navigate = useNavigate()

  return(
    <div className="flex justify-between px-10 p-5 w-full">
      <div className="flex">
        <div className="px-4 cursor-pointer" onClick={()=>navigate('/blogs')}>Home</div>
        <div className="text-slate-500">Save</div>
      </div>
      <div className="flex">
        <Avatar name={localStorage.getItem("user") || ""} />
      </div>
    </div>
  )

}

export default AppBar