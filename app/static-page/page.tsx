export default async function Page() {

    const staticData = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, { cache: 'force-cache' });


    return (
        <>
            <h1>I am the other page</h1>
            
        </>
    )
}