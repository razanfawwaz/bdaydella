import React from 'react'
import Image from 'next/image'
import Kado1 from '../../images/Kado1.jpg'
import Kado2 from '../../images/Kado2.jpg'
import Kado3 from '../../images/Kado3.jpg'
import Kado4 from '../../images/Kado4.jpg'

export default function Gift()  {
    return(
        <div className='bg-slate-800 selection:bg-white selection:text-blue-400'>
        <div className='bg-gradient-to-b from-sky-600/50 to-sky-200/50'>
            <div className="max-w-7xl mx-auto py-12">
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl text-center font-extrabold text-white drop-shadow-lg">
                        Gifts for You!
                    </h1>
                </div>
                <div className='mt-10'>
                    <div className='flex flex-wrap py-4 px-4 items-center justify-around'>
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-500'>
                        <div className=''>
                            <Image
                            src={Kado1}
                            width="384px"
                            height="151px"
                            alt='placeholder' 
                            />
                        </div>
                        <h1 className="p-4 text-left text-gray-800 text-4xl font-semibold tracking-wide">
                            Kado #1
                        </h1>
                        <p className='text-justify px-4 text-gray-500 text-md'>
                            Berasal dari pulau seberang, Dikirim menggunakan ekspedisi SiCepat. Berisi 2 buah benda rahasia, aku sama-sama bisa dibaca!
                        </p>
                        <p className='p-4 text-gray-800/70 text-md font-semibold'>
                            Estimated Arrival: 8 April 2022
                        </p>
                        <div className='mt-4 border-t-2 border-slate-500/20'>
                            <p className='text-center mt-4 text-gray-600 text-lg font-semibold'>
                                Tags: 
                            </p>
                        </div>
                        <div className='mb-8 flex items-center justify-center mt-2 '>
                            <div className='bg-sky-500/90 w-20 py-2 px-2 rounded-full'>
                                <p className='text-center text-semibold'>
                                    Papers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-500'>
                        <div className=''>
                            <Image
                            src={Kado2}
                            width="384px"
                            height="151px"
                            alt='placeholder' 
                            />
                        </div>
                        <h1 className="p-4 text-left text-gray-800 text-4xl font-semibold tracking-wide">
                            Kado #2
                        </h1>
                        <p className='text-justify px-4  text-gray-500 text-md'>
                            Bentukku gembul, aku memiliki 2 tangkai sebagai pengait di bagian atas. Aku adalah kebutuhanmu! Tungguin ya!
                        </p>
                        <p className='p-4 text-gray-800/70 text-md font-semibold'>
                            Estimated Arrival: 12 April 2022
                        </p>
                        <div className='mt-4 border-t-2 border-slate-500/20'>
                            <p className='mt-4 text-center text-gray-600 text-lg font-semibold'>
                                Tags: 
                            </p>
                        </div>
                        <div className='mb-8 flex items-center justify-center mt-2'>
                            <div className='bg-sky-500/90 w-21 py-2 px-3 rounded-full'>
                                <p className='text-center text-semibold'>
                                    Shopping
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-500'>
                        <div className=''>
                            <Image
                            src={Kado3}
                            width="384px"
                            height="151px"
                            alt='placeholder' 
                            />
                        </div>
                        <h1 className="p-4 text-left text-gray-800 text-4xl font-semibold tracking-wide">
                            Kado #3
                        </h1>
                        <p className='px-4  text-gray-500 text-md'>
                            Aku berbentuk bundar, kalau melihatku pasti kamu akan ngomel {"mau bikin gendut ya!!!"}, tapi rasaku sangatlah lezat.
                        </p>
                        <p className='p-4 text-gray-800/70 text-md font-semibold'>
                            Estimated Arrival: 8 April 2022
                        </p>
                        <div className='mt-4 border-t-2 border-slate-500/20'>
                            <p className='text-center mt-4 text-gray-600 text-lg font-semibold'>
                                Tags: 
                            </p>
                        </div>
                        <div className='mb-8 mt-2 justify-center items-center flex'>
                            <div className='bg-sky-500/90 w-20 py-2 px-2 rounded-full'>
                                <p className='text-center text-semibold'>
                                    Foods
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-500'>
                        <div className=''>
                            <Image
                            src={Kado4}
                            width="384px"
                            height="151px"
                            alt='placeholder' 
                            />
                        </div>
                        <h1 className="p-4 text-left text-gray-800 text-4xl font-semibold tracking-wide">
                            Kado #4
                        </h1>
                        <p className='px-4 text-gray-500 text-md'>
                            Halo, aku identik dengan warna biru! di mana saja pasti kamu akan mendengarkan aku! Kukira ini lagu rupanya kisah kita :D, semoga suatu saat kita bertemu! 
                        </p>
                        <p className='p-4 text-gray-800/70 text-md font-semibold'>
                            Estimated Arrival: 12 April 2022
                        </p>
                        <div className='mt-4 border-t-2 border-slate-500/20'>
                            <p className='text-center mt-4 text-gray-600 text-lg font-semibold'>
                                Tags: 
                            </p>
                        </div>
                        <div className='mb-8 flex items-center justify-center mt-2 '>
                            <div className='bg-sky-500/90 w-20 py-2 px-2 rounded-full'>
                                <p className='text-center text-semibold'>
                                    Music
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
