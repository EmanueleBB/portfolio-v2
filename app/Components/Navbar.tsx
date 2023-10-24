'use client'

import Link from "next/link"

const Navbar = () => {
   return (
      <div
         className="
            flex
            w-screen
            p-6
            justify-between
            fixed
            top-0

         "
      >
         <div className="flex flex-col">
            <Link
               className=" font-medium text-[18px] leading-snug"
               href='/'
            >
               Emanuele Burratti - [Full stack developer]
            </Link>
            <span className="text-[16px] font-regular">
               in love with next.js and pizza
            </span>
         </div>
         <div className="flex gap-4 font-medium text-[18px]">
            <Link
               href='/'
            >
               //my stack
            </Link>
            <Link
               href='/'
            >
               //projects
            </Link>
            <Link
               
               href='/'
            >
               //resume
            </Link>
            <Link
               href='/'
            >
               //contacts
            </Link>
            
         </div>
      </div>
   )
}

export default Navbar