'use client'

// import MyServer from "./myserver"

export default function MyClient(props) {
    return <div>
        <h1>Client Component</h1>
        {/* <MyServer></MyServer> */}
        {/* MyServer is passed as prop */}
        {props.children}
    </div>
}