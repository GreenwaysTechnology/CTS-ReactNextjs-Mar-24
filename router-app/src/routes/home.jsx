import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return <div id="homepage">
        <nav>
            <ul>
                <li>
                    <Link to={`contact`}>Services</Link>
                </li>
                <li>
                    <Link to={`services`}>Contact</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <section>
            {/* Compoents will go : other page */}
            <Outlet />
        </section>
        <div>
            <p>footer</p>
        </div>
    </div>
}