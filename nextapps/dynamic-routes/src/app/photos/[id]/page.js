import Image from "next/image"

export async function fetchPhotosById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json()
    return photo
}
export default async function PhotoDetailsPage(props) {
    const photo = await fetchPhotosById(props.params.id)
    return <div>
        <h1> Photo Details Page</h1>
        <h2>Id {photo.id}</h2>
        <h2>Album Id {photo.albumId}</h2>
        <h2>Id {photo.title}</h2>
        <Image src={`${photo.thumbnailUrl}`} width={500} height={500} alt="Picture" />
    </div>
}