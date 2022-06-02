export default function user(){
    return (
        <div>

        </div>
    )
}

export async function getStaticPaths(){
    const data  = fetch("https://jsonplaceholder.typicode.com/users/");
    const users = await data.json();
}