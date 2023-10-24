'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

const HeroSection = () => {

   const firstLineRef=useRef<HTMLDivElement>(null);

   useEffect(() => {
   
      if(firstLineRef.current){
         gsap.to(firstLineRef.current.children,{
            top:0,
            stagger:0.1,
            duration:0.5,
            opacity:1,
            ease:'power3.out'
         })
      }
         
      

      
   }, []);

   return (
      <div className='h-[100vh] w-full flex flex-col items-center'>
         <div className='
            lg:max-w-[980px]
            xl:max-w-[1280px]
            2xl:max-w-[1389px]
            border
            h-full
            w-full
            flex
            flex-col
            justify-center
         '>
            <div className='text-[115px] leading-tight'>
               <div className="relative overflow-hidden" ref={firstLineRef}>
                  <span className="relative top-[100px] opacity-0">Hi</span> <span className="relative top-[100px] opacity-0">there</span> <span className="relative top-[100px] opacity-0">i'm</span> <span className="relative top-[100px] opacity-0">emanuele,</span><br/>
               </div>
               <div>
                  a <span className='text-[#FBF1EA] bg-black px-2'> web developer</span> who<br/> 
               </div>
               <div>
                  loves <span className='text-[#FBF1EA] bg-black px-10'>designing</span> and <br/>
               </div>
               <div>
                  <span className='text-[#FBF1EA] bg-black px-2'>animating</span> web things
               </div>
               
            </div>
            
         </div>
      </div>
   )
}

export default HeroSection