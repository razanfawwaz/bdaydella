import React from 'react'
import Della1 from '../../images/della1.png'
import Della2 from '../../images/della2.png'
import Della3 from '../../images/della3.png'
import Image from 'next/image'

export default function Content() {
    return (
        <div className='bg-slate-800 selection:bg-white selection:text-blue-400'>
            <div className='bg-gradient-to-b from-gray-800 to-zinc-600/20'id='content'>
            <div className="max-w-8xl mx-auto py-12">
                <div className="flex justify-center items-center">
                    <h1 className="text-6xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-cyan-200 to-blue-300 drop-shadow-lg">
                        Today{<br></br>}is {<span className='underline decoration-cyan-500/50'>my birthday!</span>}
                    </h1>
                </div>
                <div className="transition ease-in duration-1000 flex justify-center items-center pt-8" >
                    <div className='-mr-12 z-0'>
                        <Image src={Della1} alt="Della" width="160px" 
                        loading="lazy" className="opacity-95" height="160px"/>
                    </div>
                    <div className='z-10'>
                        <div className='rounded-full drop-shadow-2xl'>
                            <Image src={Della2} alt="Della" width="210px" 
                            loading="lazy" className='' height="210px"/>
                        </div>
                    </div>
                    <div className='-ml-12'>
                        <Image src={Della3} alt="Della" width="160px" 
                        loading="lazy" className="" height="160px"/>
                    </div>
                </div>
                <div className="flex mx-auto justify-center items-center pt-4">
                    <h1 className='text-4xl font-semibold'>Della Avrillia Kurniawan</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-md pt-2'>Tangerang, 8 April 2002</p>
                </div>
                <div className='flex justify-center items-center pt-8'>
                    <a href="https://instagram.com/dellaavrillia" className="animate-bounce w-35 h-auto bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-600 py-2 px-4 rounded-lg active:ring-2 active:ring-offset-2 active:ring-blue-600">
                        <a>Send Me a Wishes</a>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}