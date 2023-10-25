'use client'

import gsap, { distribute } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const HeroSection = () => {

   const firstLineRef=useRef<HTMLDivElement>(null);
   const secondLineRef=useRef<HTMLDivElement>(null);
   const thirdLineRef=useRef<HTMLDivElement>(null);
   const fourthLineRef=useRef<HTMLDivElement>(null);

   const [isDeveloperAnimating, setIsDeveloperAnimating] = useState(false);
   const [isDesignAnimating, setIsDesignAnimating] = useState(false);

   useEffect(() => {

      const tl=gsap.timeline();
   
      if(firstLineRef.current && secondLineRef.current){

         tl.to(firstLineRef.current.children,{
            top:0,
            stagger:0.2,
            duration:1.2,
            opacity:1,
            ease:'power2.inOut'
         },'0').to(secondLineRef.current.children,{
            top:0,
            stagger:0.1,
            duration:1.2,
            opacity:1,
            ease:'power3.out'
         },'0.8')
      }
         
      

      
   }, []);

   return (
      <div className='h-[100vh] w-full flex flex-col items-center relative'>
         {isDeveloperAnimating && (
            <div className="absolute z-20 w-screen h-screen bg-stone-900/10 backdrop-blur-xl transition-all duration-1000">

            </div>
         )}
         {isDesignAnimating && (
            <div className="absolute z-20 w-screen h-screen bg-stone-900/10 backdrop-blur-lg transition duration-300">
               <div className="w-40 h-40 bg-sky-900">

               </div>
            </div>
         )}
         <div className='
            lg:max-w-[980px]
            xl:max-w-[1280px]
            2xl:max-w-[1389px]
            border
            h-full
            w-full
            flex
            flex-col
            gap-4
            justify-center
         '>
            <div className='text-[115px] leading-tight'>


               <div className="relative overflow-hidden flex justify-between" ref={firstLineRef}>
                  <span className="relative top-[400px] opacity-0">Hi</span> <span className="relative top-[300px] opacity-0">there</span> <span className="relative top-[200px] opacity-0">i'm</span> <span className="relative top-[100px] opacity-0">emanuele,</span><br/>
               </div>


               <div className="relative flex overflow-hidden justify-between " ref={secondLineRef}>
                  <span className="relative top-[100px] opacity-0 z-1">a</span> 
                  <div className="
                     px-2 
                     box-border 
                     cursor-none
                     hover:z-30
                  "
                     onPointerEnter={()=>setIsDeveloperAnimating(true)}
                     onPointerLeave={()=>setIsDeveloperAnimating(false)}
                  > 
                     <span className='text-[#FBF1EA] relative bg-black px-2 select-none	 '> 
                        web developer
                     </span > 
                  </div>
                  <span className="relative top-[100px] opacity-0">who</span><br/> 
               </div>

               <div className="relative overflow-hidden flex justify-between" ref={thirdLineRef}>
                  loves 
                  <div className="
                     px-2 
                     box-border 
                     cursor-none
                     hover:z-30
                     "
                     onPointerEnter={()=>setIsDesignAnimating(true)}
                     onPointerLeave={()=>setIsDesignAnimating(false)}
                  >
                     <span className='text-[#FBF1EA] relative bg-black px-8 '> 
                        designing
                     </span > 
                  </div> and <br/>
               </div>

               <div className="relative flex overflow-hidden justify-between" ref={fourthLineRef}>
               <div className="px-2 box-border cursor-pointer">
                     <span className='text-[#FBF1EA] relative bg-black px-2 '> 
                        animating
                     </span > 
                  </div> <span>web</span> <span>things</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroSection