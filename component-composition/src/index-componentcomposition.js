//component compostion
import ReactDOM from 'react-dom/client';

const Hello = () => <>
    <h1>Hello</h1>
</>
const Hai = () => <>
    <h1>Hai</h1>
</>
const Greeter = () => <>
    <h1>Greeter</h1>
</>

const Welcome = () => {
    return <div>
        <Hello />
        <Hai />
        <Greeter />
    </div>
}
const App = ()=><Welcome/>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)