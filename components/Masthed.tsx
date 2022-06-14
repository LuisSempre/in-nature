import React, { useRef, useContext, useState, useCallback } from 'react'
import Image from 'next/image'
import { ScrollContext } from './Scroll'

const Masthead: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }
    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }
    , [])
    return (
        <div
            ref={refContainer}
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
            className='sticky top-0 flex flex-col items-center justify-center min-h-screen -z-10'>
            <video autoPlay loop muted playsInline className='absolute object-cover w-full h-full'>
                <source src="/back.mp4" type="video/mp4" />
            </video>
            <div className={`flex-grow-0 pt-10 translate-opacity duration-1000`}>
                <Image src="/logo.svg" width={128 / 3} height={114 / 3} alt="logo" />
            </div>
            <div className='p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>In Nature</h1>
                <h2 className='mb-2 text-xl tracking-tight xl:text-2xl'>
                    <span>App Development,</span> <span>done right.</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-20 duration-1000 md:pb-10 translate-all 
            ${ imageLoaded ? 'opacity-100' : 'opacity-0' }` }>
                <Image src="/arrow.svg"
                    width={188 / 3}
                    height={105 / 3}
                    alt="arrow" 
                    onLoad={handleImageLoaded}
                    />
            </div>
        </div>
    )
}

export default Masthead
