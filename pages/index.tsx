import type { NextPage } from 'next'
import About from '../components/About'
import Masthead from '../components/Masthed'
import Skills from '../components/Skills'
import Works from '../components/Works'

const Home: NextPage = () => {
  return (
    <div>
     <Masthead />
     <About />
     <Skills />
     <Works />
     <About />
    </div>
  )
}

export default Home
