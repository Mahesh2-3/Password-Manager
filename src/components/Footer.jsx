import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bottom-0 sticky w-full flex flex-col items-center justify-evenly  bg-green-950 '>
        <div className=' flex flex-row gap-2  items-center justify-center'>
        <div className="logo text-2xl font-bold text-green-500">
          &lt;<span className="text-white">Pass</span><span>OP</span>/&gt;
        </div>
        <div className='text-white font-semibold'>
          Created With ❤️ By Mahesh3.2 🗿
        </div>
          </div>
        <div className="text-sm text-center text-white py-3">

"This website is fully functional, but user data collection is disabled due to Google’s restrictions. Enjoy exploring!"        </div>
      </div>
    </>
  )
}

export default Footer
