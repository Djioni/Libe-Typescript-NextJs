import Row from './movieList'
import request from '../api/request'
export default function Rows() {
  return (
    <div className="bg-[#0a0a0a]">
      <Row title="Tendance" fetchURL={request.getTrending} isLarge />
     
      <Row title="Top notés" fetchURL={request.getTopRated} isLarge={true} />

      <Row title="Dernières sorties" fetchURL={request.getLastRelease} isLarge={false} />
  
    </div>
  )
}
