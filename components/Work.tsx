import React from 'react'
import Link from 'next/link'

type Props = {
    children: React.ReactNode
}

export const WorkContainer: React.FC<Props> = ({ children }) => (
    <div className='grid w-full grid-cols-1 lg:grid-cols-2 min-h-scren'>
        {children}
    </div>
)

export const WorkBackground: React.FC = () => (
    <div className='grid w-full min-h-screen grid-cols-1 lg:grid-cols-2'>
        <div className='bg-black h-[30vh] lg:h-auto'>
            <div className='bg-white h-[70vh] lg:min-h-screen' ></div>
        </div>
    </div>
)

export const WorkLeft: React.FC<{ progress: number }> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div className='flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto'
            style={{
                transform: `translateY(${translateY}px)`
            }}
        >
            <div className='leading-10'>
                {children}
            </div>
        </div>
    )
}

export const WorkRight: React.FC<{ progress: number }> = ({
    children,
    progress
}) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div className='flex justify-center flex-1 h-screen lg:items-center'
            style={{
                transform: `translateY(${translateY}px)`
            }}
        >
            <div className='w-full max-w-md px-10 pt-10 lg:pt-0 md:px-0'>
                {children}
            </div>
        </div>
    )
}