export default async function Page() {

    const staticData = await fetch(`https://api.tvmaze.com/shows/81`, { cache: 'force-cache' });


    return (
        <>
            <h1>I am the other page</h1>
            
        </>
    )
}