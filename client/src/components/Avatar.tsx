
function Avatar({name}:{name:string}){
    return(
      <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 -z-10">
        <span className="font-medium text-gray-600 dark:text-gray-300 flex justify-center items-center">{name[0].toUpperCase()}</span>
      </div>
    )
  }

export default Avatar