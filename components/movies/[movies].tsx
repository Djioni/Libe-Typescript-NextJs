export default function movies() {
  return <div></div>;
}


export async function getStaticProps(context) {
    const id = context.params.movie;
    const data = await fetch(`${id}`)
    const movie = await data.json();
    return {
        props: {
            movie
        }
    }
}
export async function getStaticPaths() {
  const data = fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b3ed52acd16017dcb426872d099d673a");
  const users = await data.json();
  const paths = movies.map((item) => ({
    params: { movie: item.id.toString() },
  }))
  return {
      paths: paths,
      fallback: false,
  }
}
