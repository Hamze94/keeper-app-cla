import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";


export default function Sidebar() {
    return (
        <div className='w-64 bg-gray-800 fixed h-full'>
            <div className=' rounded-lg bg-slate-300 p-5 m-2'>
                <h1 className='px-3 mt-2 text-lg'><IoIosAddCircleOutline className=' inpne-block h-8 w-8 mr-2 -mt-1'></IoIosAddCircleOutline>
                    Add Project</h1>
            </div>
            <div className=' bg-slate-300 mx-1'>
                <h1 className=' text-lg  font-semibold '>STATS</h1>
            </div>
            <p className=' text-center font-pght'>Projects</p>
            <p className='mb-2'>Inbox</p>
            <p className='mb-2'>Workspace</p>
            <p className='mb-2'>CLA</p>
            <p className='mb-2'>Project X</p>



        </div>
    )
}
