import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <div className='p-8'>
        <div className="flex-row-reverse flex flex-wrap max-sm:gap-4 justify-center max-w-7xl mx-auto">
          <div className=" bg-[#003B65] p-6 w-[90vw] sm:w-[45vw] h-[75vh] flex sm:content-center flex-col sm:items-center sm:justify-center">
            <h1 className='text-white text-[21px] font-medium sm:text-3xl'>Welcome to WandyTech</h1>
            <p className='text-[#ABBECC] sm:text-justify pt-3 pb-3 text-[18px]'>
 
              We are a startup EdTech company headquartered in Lagos Nigeria and also cosultants to schools and organisations for Tech training. 
              Even with your mobile device, you can now train yourself indoors - from Coding to Accounting, Tourism & Aviation,
              as well as in preparatory courses for ICAN, UTME and SSCE exams etc. 
            </p>
          </div> 
          <div className=" max-sm:rounded-lg sm:inline-block w-[90vw] sm:w-[45vw] h-[75vh] ">
            <Image className='w-[100%] h-[85%] overflow-hidden object-cover' src={'/wandyboss1.png'} width={700} height={600} alt=''/>
            <div className="w-[100%] p-6 h-[15%] flex flex-col justify-center items-center bg-lime-950 py-4 text-white">
             <p className='text-xl'>Jonadab Omonigho</p>
             <p>CEO, Wahalanodey Group</p>
             {/* <p>HighKlass Intl Schools </p> */}
            </div>
          </div>
        </div>
    </div>
  )
}
