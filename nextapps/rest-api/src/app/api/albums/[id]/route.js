import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/albums`

export async function GET(request, { params }) {
    try {
        const id = Number(params.id) || 1
        const response = await fetch(`${url}/${id}`)
        const albums = await response.json()
        return NextResponse.json(albums)
    }
    catch (err) {
        return NextReponse.json(err)
    }
}

//post operation

export async function PUT(request,{params}) {
    try {
        const {title} = await request.json()
        const id = Number(params.id) || 1
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        })
        const updatedAlbum = await response.json()
        return NextResponse.json(updatedAlbum);

    }
    catch (err) {
        return NextResponse.json(err)
    }
}

export async function DELETE(request, { params }) {
    try {
        const id = Number(params.id) || 1
        const response = await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
        const albums = await response.json()
        return NextResponse.json(albums)
    }
    catch (err) {
        return NextReponse.json(err)
    }
}