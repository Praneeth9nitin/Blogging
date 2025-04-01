import { Link } from "react-router-dom"
import plus from "../assets/plus.svg"

function Create() {
    return (
        <Link to={"/createblog"}>
        <div className="cursor-pointer fixed lg:bottom-24 lg:right-20 bottom-10 right-10 flex items-center justify-center lg:w-20 lg:h-20 w-15 h-15 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-5xl text-gray-600 dark:text-gray-300 flex justify-center items-center"><img src={plus} alt="" /></span>
        </div>
        </Link>
    )
}

export default Create