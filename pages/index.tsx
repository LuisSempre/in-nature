import type { NextPage } from 'next'
import About from '../components/About'
import Masthead from '../components/Masthed'

const Home: NextPage = () => {
  return (
    <div>
     <Masthead />
     <About />
    </div>
  )
}

export default Home
