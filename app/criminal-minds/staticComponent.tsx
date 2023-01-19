import Image from 'next/image'

async function getStaticData() {

    const response = await fetch(`https://api.tvmaze.com/shows/81`, { cache: 'force-cache' });
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return await response.json();
  }
  

export default async function StaticStuff() {
    const data = await getStaticData();

    return (
        <>
            <Image
                src={data.image.medium}
                alt="Picture of TV Show"
                width={210}
                height={295}
            />
        </>
    )
}