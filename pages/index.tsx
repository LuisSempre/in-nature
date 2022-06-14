import type { NextPage } from 'next'
import About from '../components/About'
import Masthead from '../components/Masthed'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
     <Masthead />
     <About />
     <Skills />
     <Skills />
    </div>
  )
}

export default Home
