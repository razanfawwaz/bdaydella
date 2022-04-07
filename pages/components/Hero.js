import React from 'react'
import Navbar from './Navbar'

export default function Hero() {

    return(
        // eslint-disable-next-line react/jsx-no-duplicate-props
        <div className="bg-slate-800 selection:bg-white selection:text-blue-400">
            <div className='bg-gradient-to-b from-slate-900 via-slate-900 to-gray-800'>
                <Navbar />
                    <div className="max-w-8xl mx-auto px-2 py-20 md:py-18">
                        <div className="flex flex-row justify-center items-center overflow-hidden">
                            <div className='grid grid-rows-4 grid-flow-col gap-4'>
                                <div className="mt-14 -mb-4">
                                    <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-cyan-200 to-blue-300 drop-shadow-lg mt-2 text-center underline decoration-cyan-500/50 font-semibold tracking-wide">Happy Birthday</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-6xl py-2 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-cyan-200 to-blue-300 underline decoration-cyan-500/50 text-center drop-shadow-2xl font-semibold">Della Avrillia Kurniawan</h1>
                                </div>
                                <div className="max-w-2xl text-white text-center font-regular text-2xl drop-shadow-lg">
                                    <p>Selamat ulang tahun! semoga panjang {<br></br>} umur dan sehat selalu! cieeee udah 20 taun nih!</p>
                                </div>
                                <dic className='flex justify-center mb-10'>
                                    <a href="#content"  className="animate-bounce bg-white hover:bg-slate-300/95 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                        </svg>
                                    </a>
                                </dic>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}