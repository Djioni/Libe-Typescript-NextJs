import {keys} from "../../config/config";

const API_KEY = keys.api_key;
// const latestMovie = async () => {
//   await fetch('https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US')
// }

const request =  {
  getTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  getNetflixOG: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 
   getLastRelease: `/movie/latest?api_key=${API_KEY}&language=en-US`,

}

export default request
