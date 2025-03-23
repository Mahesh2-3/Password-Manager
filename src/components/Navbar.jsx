import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[9vh] bg-green-950 text-2xl font-bold flex items-center justify-around '>
            <div className="logo  text-green-500">
                &lt;<span className="text-white">Pass</span><span >OP</span>/&gt;
            </div>
                <a target='__blank__' href="https://github.com/Mahesh2-3">
            <button className='flex items-center gap-2 text-lg border border-white rounded-full p-[4px] text-white'>
                <img  src="/Gitlogo.svg" alt="" />
                <span>GitHub</span>
            </button></a>
        </div>
    )
}

export default Navbar