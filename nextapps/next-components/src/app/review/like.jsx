'use client' //top of the code..

import { useState } from "react"
import DislikeServer from "./dislike"

export default function Like() {
    const [like, setLike] = useState(0)
    return <div>
        <h1>Like {like}</h1>
        <button onClick={() => {
            console.log('client ')
            setLike(like + 1)
        }}>+</button>

        {/* Use server component */}
        <DislikeServer/>
    </div>
}