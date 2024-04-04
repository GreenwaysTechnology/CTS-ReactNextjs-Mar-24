import Link from "next/link"
import TODOS from "../mock-data/todos"

export default function Todos() {
    return <div>
        <h1>Todos Page</h1>
        <ul>
            {
                TODOS.map(todo => {
                    return <li key={todo.id}>
                        <span>
                            <Link href={{ pathname: `/todos/${todo.id}` }}>{todo.title}</Link>
                        </span>
                    </li>
                })
            }
        </ul>
    </div>

}