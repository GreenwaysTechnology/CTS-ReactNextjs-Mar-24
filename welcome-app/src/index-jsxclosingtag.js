import ReactDOM from 'react-dom/client';
import logo from './logo.svg';

//must have closing tag
// const Welcome = ()=>{
//     return <div>
//         <h1>Hello
//     </div>
// }
const Welcome = () => {
    return <div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Welcome></Welcome>)
root.render(<Welcome/>)
