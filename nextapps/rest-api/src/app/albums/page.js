export async function fetchAlbums() {
    try {
        const response = await fetch('http://localhost:3000/api/albums')
        const albums = await response.json()
        return albums
    }
    catch (err) {

    }
}
export default async function AlbumPage() {

    const albums = await fetchAlbums();
    console.log(albums)

    return <div>
        {
            albums.map(album => {
                return <div>
                    <h2>{album.title}</h2>
                </div>
            })
        }
    </div>

}