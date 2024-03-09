import React, { useState } from 'react'
import { FiAlignJustify, } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddBox, MdOutlineWbSunny } from "react-icons/md";
import Modal from './Model';

export default function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)} />
            <div className='grid grid-cols-2  text-cyan-50 bg-[#9657e7] p-4'>
                <div className="flex">
                    <button onClick={() => setOpenModal(true)} className=' text-3xl'><FiAlignJustify /></button><h1 className=' text-xl'>KEEPER</h1>
                </div>
                <div id='sidebar' className="flex gap-5 justify-end text-2xl">
                    <CiUser />
                    <MdOutlineAddBox />
                    <MdOutlineWbSunny />
                </div>

            </div>

        </>
    )
}
