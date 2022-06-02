import Link from 'next/link';




export default function index(props){
 
    return (
        <div  className="container px-4 pt-5">
            <h1 className="text-center">La liste des films</h1>
            <div className="row justify-content-center mt-5">
     
                {props.users.map((user) =>(
                    // eslint-disable-next-line react/jsx-key
                    <div className="col-12 col-lg-6 m-3">

                        <div className="card">
                            <div className="card-body d-flex justify-content-between">
                                  <h5 className="card-title">{user.username}</h5>
                                  {/* <li key={user.id}></li> */}
                                  <Link href={`/films/${user.id}`}>
                                  <a className="ml-auto card-link">Voir</a>
                                  </Link>
                            </div>

                        </div>
                    </div>
                ))}
               
            </div>

        </div>
    )
                
}



export async function getServerSideProps() {
 
  
    const data = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await data.json();
   
   



    return {
      props: {
       users,
        
      },
    }
  }

