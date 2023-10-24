import React from 'react'
import {BsInstagram,BsLinkedin} from 'react-icons/bs';


import {FiMail} from 'react-icons/fi';


const SubNav = () => {
   return (
      <div className='sticky bottom-0 p-6 w-full flex justify-between items-end'>
         <div className='flex flex-col gap-2'>
            <BsInstagram size={24}/>
            <BsLinkedin size={24}/>
            <FiMail size={24}/>
         </div>
         <span className='h-5 text-[18px]'>© Emanuele burratti 2023 </span>
      </div>
   )
}

export default SubNav