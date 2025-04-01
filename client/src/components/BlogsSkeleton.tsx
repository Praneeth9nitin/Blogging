
function BlogsSkeleton() {
    return (
        <div className='relative py-10 border-b-1 border-b-gray-300 animate-pulse -z-10'>
            <div className='flex items-center gap-2'>
                <div className="h-6 bg-gray-200 rounded-full w-6 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
            <div className='h-10 bg-gray-200 rounded-full lg:w-full w-full mb-4'></div>
            <div className='h-9 bg-gray-200 rounded-full w-full mb-4'></div>
        </div>
    )
}


export default BlogsSkeleton