import React from 'react'

function BlogSkelton() {
  return (
    <div className="grid grid-cols-3 gap-24 m-10 animate-pulse">
       <div className="lg:col-span-2 col-span-3">
        <div>
            <div className="bg-gray-200 w-full rounded-full h-10"></div>
            <div className="bg-gray-200 w-1/4 h-5 rounded-full m-2"></div>
        </div>
        <div className=' mt-6 '>
            {Array(10).fill(0).map((e,i)=>
                <div key={i} className="bg-gray-200 w-full m-2 h-7 rounded-full mb-2"></div>
            )}
        </div>
    </div>
    </div>
  )
}

export default BlogSkelton