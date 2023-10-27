'use client'

import gsap, { distribute } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MongoDbIcon from "./icons/MongoDbIcon";

const HeroSection = () => {

   const firstLineRef=useRef<HTMLDivElement>(null);
   const secondLineRef=useRef<HTMLDivElement>(null);
   const thirdLineRef=useRef<HTMLDivElement>(null);
   const fourthLineRef=useRef<HTMLDivElement>(null);

   const [isDeveloperAnimating, setIsDeveloperAnimating] = useState(false);
   const [isDesignAnimating, setIsDesignAnimating] = useState(false);

   useEffect(() => {

      const tl=gsap.timeline();
   
      if(firstLineRef.current 
         && secondLineRef.current 
         && thirdLineRef.current
         && fourthLineRef.current
         ){

         tl.to([firstLineRef.current.children[0],firstLineRef.current.children[1]],{
            top:0,
            stagger:0.15,
            duration:0.7,
            opacity:1,
            ease:'power3.inOut'
         },'0').to([firstLineRef.current.children[2],firstLineRef.current.children[3]],{
            top:0,
            stagger:0.2,
            duration:0.8,
            opacity:1,
            ease:'power3.inOut'
         },'0.56').to(secondLineRef.current.children,{
            top:0,
            left:0,
            stagger:0.1,
            duration:1.2,
            opacity:1,
            ease:'power3.inOut'
         },'1').to(thirdLineRef.current.children,{
            top:0,
            left:0,
            stagger:0.1,
            duration:1.2,
            opacity:1,
            ease:'expo.inOut'
         },'1.2').to(fourthLineRef.current.children,{
            top:0,
            left:0,
            stagger:0.1,
            duration:1.2,
            opacity:1,
            ease:'expo.inOut'
         },'1.4')
         .to('.blackSpan',{
            backgroundImage:'linear-gradient(to right,black 100%,#FBF1EA 100%)',
            duration:1,
            ease:'power1.inOut',
            stagger:0.4
         },'1.6')
      }
         
      

      
   }, []);

   return (
      <div className='h-[100vh] w-full flex flex-col items-center relative'>
         {isDeveloperAnimating && (
            <div className="absolute z-20 w-screen h-screen bg-[black] backdrop-blur-xl transition-all duration-1000">
               <MongoDbIcon/>
            </div>
         )}
         {isDesignAnimating && (
            <div className="absolute z-20 w-screen h-screen bg-[black] backdrop-blur-lg transition duration-300">
               <div className="w-40 h-40 bg-sky-900">

               </div>
            </div>
         )}
         <div className='
            lg:max-w-[980px]
            xl:max-w-[1280px]
            2xl:max-w-[1389px]
            
            h-full
            w-full
            flex
            flex-col
            gap-4
            justify-center
         '>
            <div className='text-[115px] text-black leading-tight'>


               <div className="relative flex overflow-hidden justify-between" ref={firstLineRef}>
                  <span className="relative top-[100px] opacity-0">Hi</span> <span className="relative top-[100px] opacity-0">there!</span> <span className="relative top-[100px] opacity-0">i'm</span> <span className="relative top-[100px] opacity-0">emanuele,</span><br/>
               </div>






               <div className="relative flex overflow-hidden justify-between " ref={secondLineRef}>
                  <span className="relative top-[100px] opacity-0">a</span> 
                  <div className="
                     px-2 
                     box-border 
                     cursor-none
                     hover:z-30
                     
                  "
                     onPointerEnter={()=>setIsDeveloperAnimating(true)}
                     onPointerLeave={()=>setIsDeveloperAnimating(false)}
                  > 
                     <span className='text-[#FBF1EA] relative px-2 select-none blackSpan hover:bg-[#141413]'> 
                        web developer
                     </span > 
                  </div>
                  <span className="relative top-[100px] opacity-0">who</span><br/> 
               </div>






               <div className="relative overflow-hidden flex justify-between" ref={thirdLineRef}>
                  <span className="relative top-[100px] opacity-0">loves</span> 
                  <div className="
                     spanDiv
                     flex
                     box-border 
                     cursor-none
                     hover:z-30
                     p-1
                     "
                     onPointerEnter={()=>setIsDesignAnimating(true)}
                     onPointerLeave={()=>setIsDesignAnimating(false)}
                  >
                     <span className='text-[#FBF1EA] relative blackSpan px-8'> 
                        designing
                     </span > 
                  </div> 
                  <span className="relative top-[100px] opacity-0">and</span> <br/>
               </div>






               <div className="relative flex overflow-hidden justify-between" ref={fourthLineRef}>
               <div className="px-2 box-border cursor-pointer">
                     <span className='text-[#FBF1EA] relative blackSpan px-2 '> 
                        animating
                     </span > 
                  </div> <span className="relative top-[100px] opacity-0">web</span> <span className="relative top-[100px] opacity-0">things</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroSection