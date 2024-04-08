import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/albums`

export async function GET(request) {
    try {
        const response = await fetch(url)
        const albums = await response.json()
        return NextResponse.json(albums)
    }
    catch (err) {
        return NextReponse.json(err)
    }
}

//post operation

export async function POST(request) {
    try {
        const album = await request.json()
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(album)
        })
        const newAlbum = await response.json()
        return NextResponse.json(newAlbum);

    }
    catch (err) {
        return NextResponse.json(err)
    }
}