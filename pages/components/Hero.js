import React from 'react'
import Navbar from './Navbar'

export default function Hero() {

    return(
        <div className="bg-slate-800">
            <div className='bg-gradient-to-r from-red-800/50 to-rose-600/50'>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-20 md:py-18">
                <div className="flex flex-row justify-center items-center overflow-hidden">
                   <div className='grid grid-rows-4 grid-flow-col gap-4'>
                        <div className="shadow-xl py-4 px-4 bg-sky-500 text-center dark:shadow-blue-500/30 rounded-md">
                            <h1 className="text-4xl text-white drop-shadow-lg font-bold tracking-wide">Happy Birthday</h1>
                        </div>
                        <div className="shadow-xl py-2 px-8 bg-blue-300 hover:from-cyan-450/20 hover:to-cyan-300/20 rounded-md">
                            <h1 className="text-4xl py-2 text-white text-center drop-shadow-2xl font-bold">Della Avrillia Kurniawan</h1>
                        </div>
                        <div className="max-w-md text-white text-center font-semibold text-lg drop-shadow-lg">
                            <p>Selamat ulang tahun! semoga panjang umur dan sehat selalu! cieeee udah 20 taun nih!</p>
                        </div>
                   </div>
                   <a href="#" className='flex justify-center mt-16'>
                            <div className="animate-bounce bg-white hover:bg-slate-300/95 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}