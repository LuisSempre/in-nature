import Reac from 'react';
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile';
import { WorkBackground, WorkContainer, WorkLeft } from './Work';


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
                            <span className='text-9xl'>Foo {progress}</span>
                        </WorkLeft>
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