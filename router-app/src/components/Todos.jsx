import { useParams } from "react-router-dom"

export default function Todos() {
    const params = useParams()
    return <div>
        <h1>Todos {params.id}</h1>
    </div>
}