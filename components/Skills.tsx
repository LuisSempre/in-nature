import React, { useContext, useRef } from 'react'
import s from '../skills.module.css'
import { ScrollContext } from '../components/Scroll'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >=0 && progress < 1) return 1
    return 0.2
}

const Skills: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3 
    let progress = 0
    
    const { current: elContainer } = refContainer
    if(elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH /2
        const percentY = 
            Math.min(clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
            ) /clientHeight
            progress = Math.min(numOfPages -
                 0.5, Math.max(0.5, percentY * numOfPages))
    }
    return (
        <div ref={refContainer} className='text-white bg-black'>
            <div className='flex flex-col items-center justify-center max-w-5xl min-h-screen px-10 py-24 mx-auto font-semibold tracking-tight lg:px-20 md:py-28 lg:py-36 lg:text-7xl'>
                <div className='leading=[1.15]'>
                    <div className={s.skillText}
                        style={{
                            opacity: opacityForBlock(progress, 0)
                        }}>
                        We know how to build a great product.
                    </div>
                    <span className={`${s.skillText} inline-block after:content['_']`} style={{
                            opacity: opacityForBlock(progress, 1)
                        }}>
                        Our team has contributed 123 commits to React Native core, powering thousands of apps world.
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                            opacity: opacityForBlock(progress, 2)
                        }}>
                        We&apos;re maintaining some of the most popular libraries in the world. <strong>1,000</strong> downloads.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills