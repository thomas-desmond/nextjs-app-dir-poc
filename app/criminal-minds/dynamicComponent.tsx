import Image from 'next/image'

async function getStaticData() {

    const response = await fetch(`https://api.tvmaze.com/shows/81?embed=nextepisode`, { cache: 'no-store' });
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return await response.json();
}


export default async function DynamicStuff() {
    const data = await getStaticData();
    const nextEpisode = data._embedded.nextepisode

    return (
        <>
            <p>
                Next Air Date: {nextEpisode.airdate}
            </p>
        </>
    )
}