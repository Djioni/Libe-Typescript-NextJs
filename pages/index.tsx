import type { NextPage } from 'next'

import Movies from '../components/movies/moviesLists'



const Home: NextPage = () => {
  return (
    <div className="select-none bg-[#0a0a0a] font-netflixSans">
   
    
      <Movies />
    </div>
  )
}

export default Home
