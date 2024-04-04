import Link from "next/link"


//api call 
export async function fetchPhotos() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await reponse.json()
    return photos
}


export default async function PhotoPage() {
    const photos = await fetchPhotos()
    return <div>
        <h1>Photo Page</h1>
        <ul>
            {
                photos.map(photo => {
                    return <li>
                        <Link href={`/photos/${photo.id}`}>{photo.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}