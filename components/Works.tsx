/* eslint-disable jsx-a11y/alt-text */
import Reac from 'react';
import Image from 'next/image';
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './Work';


const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
            <WorkBackground />
        </TileBackground >
        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <div className='text-4xl font-semibold tracking-tight md:text-5xl'>
                                Pink Panda&apos;s app
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/i.png"
                                layout="responsive"
                                width={840}
                                height={1620}
                                alt="Pink Panda's app"
                            />
                        </WorkRight>
                    </WorkContainer>
                )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
                page={1}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <span className='text-9xl'>Bar {progress}</span>
                        </WorkLeft>
                    </WorkContainer>
                )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
                page={2}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <span className='text-9xl'>BaZ {progress}</span>
                        </WorkLeft>
                    </WorkContainer>
                )}></Tile>

        </TileContent>
    </TileWrapper>
)
export default Works