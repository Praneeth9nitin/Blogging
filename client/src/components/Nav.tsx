import React from 'react'

function Nav() {
  return (
    <div className='flex flex-row border-b-1 border-b-gray-300 items-center justify-around lg:justify-start sticky top-0 bg-white'>
        <div className='p-5'>For you</div>
        <div className='p-5'>Following</div>
    </div>
  )
}

export default Nav