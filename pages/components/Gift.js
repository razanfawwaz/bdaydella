import React from 'react'
import Image from 'next/image'
import Kado1 from '../../images/Kado1.jpg'
import Kado2 from '../../images/Kado2.jpg'
import Kado3 from '../../images/Kado3.jpg'
import Kado4 from '../../images/Kado4.jpg'

export default function Gift()  {
    return(
        <div className='bg-slate-800 selection:bg-white selection:text-blue-400'>
        <div className='bg-gradient-to-b from-zinc-600/20 via-zinc-700/20 to-slate-800'>
            <div className="max-w-7xl mx-auto py-12">
                <div className="flex justify-center items-center">
                    <h1 className="text-6xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-cyan-200 to-blue-300 drop-shadow-lg underline decoration-cyan-500/50">
                        For You Page!
                    </h1>
                </div>
                <div className='mt-14'>
                    <h3 className='text-white px-8 text-4xl font-semibold'>
                        Gift For You
                    </h3>
                    <div className='flex flex-wrap px-4 items-center justify-around'>
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-200'>
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
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-200'>
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
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-200'>
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
                    <div className='mt-8 mb-4 outline outline-2 outline-blue-500/50  max-w-sm rounded-md overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 bg-white transition hover:scale-105 ease-in-out hover:duration-200'>
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
                <div className='mt-8'>
                    <h3 className='px-8 text-4xl font-semibold text-white'>
                        Wish For You
                    </h3>
                    <div className="flex flex-wrap items-center justify-around  mb-24">
                    <div className='flex justify-center items-center max-w-lg'>
                        <div className='mt-8 w-lg rounded-lg bg-slate-700 mx-2 px-8 py-4 outline outline-2 outline-slate-500/50 hover:drop-shadow-xl'>
                            <h2 className='text-lg font-regular text-white'>
                                <span className='underline decoration-red-500/90 font-semibold text-white text-xl'>Hi Della,</span> Selamat ulang tahun yang ke-20 ya! Semoga sehat selalu, kuliahnya lancar, semoga makin sayang sama kucing-kucingnya!, semoga bisa ngonser bareng ya hahahaha!! Semoga lancar segala urusan dan rezekinya!!
                            </h2>
                            <div className='py-4 border-b-2 border-slate-500'>
                            </div>
                            <div className='py-4'>
                                    <p className='text-white/80 text-xl'>Razan Fawwaz</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center max-w-lg'>
                        <div className='mt-8 w-lg rounded-lg bg-slate-700 mx-2 px-8 py-4 outline outline-2 outline-slate-500/50 hover:drop-shadow-xl'>
                            <h2 className='text-lg text-white font-regular'>
                                <span className='underline decoration-red-500/90 font-semibold text-xl'>Me Meoongggg!</span> Meong meong!! meoooooooong proplan meong pasir!!!! meong air!!!! meong meongggg meooong uuuuuang meong! meong grawukkk! meonk meooooonk meonk baik meooonk berkah meoooon lov u meonkkkk!
                            </h2>
                            <div className='py-4 border-b-2 border-slate-500'>
                            </div>
                            <div className='py-4'>
                                    <p className='text-white/80 text-xl'>(Nopal) Kucing tersayang</p>
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
