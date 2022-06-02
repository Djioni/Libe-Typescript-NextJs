import React, { useState, useEffect } from 'react';


// export default function Index() {
//     const [ movies, setMovies ] = useState()
//     const [isLoading, setIsLoading] = useState(false)
//     useEffect(() => {
//         setIsLoading(true)
//         fetch('https://api.themoviedb.org/3/movie/550?api_key=b3ed52acd16017dcb426872d099d673a')
//             .then(response => response.json())
//             .then(data => {
//                 setMovies(data)
//                 setIsLoading(false)
//             })
//     }, [])
//     if (isLoading) {
//         return <p>Loading....</p>
//     }
//     if (!movies) {
//         return <p>No Movies to show</p>
//     }
//     return (
//         <div>
//             <h1>Movie List</h1>
//             <ul>
//                 {movies.map( movie =>
//                     <li key={movie.id}>
//                         {movie.original_title} - <span>( {movie.completed ? 'Completed' : 'Not Completed'} )</span>
//                     </li>
//                 )}
//             </ul>
//         </div>
//     )
// }

export default function ToDoPage() {
    const [ toDos, setToDos ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => {
                setToDos(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }
    return (
        <div>
            <h1>TODO List</h1>
            <ul>
                {toDos.map( toDo =>
                    <li key={toDo.id}>
                        {toDo.title} - <span>( {toDo.completed ? 'Completed' : 'Not Completed'} )</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
