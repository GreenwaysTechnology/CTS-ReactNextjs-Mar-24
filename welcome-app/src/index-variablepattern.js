import ReactDOM from 'react-dom/client';

//variable Pattern
//Heading is variable <h1>Hello</h1> is comonent
const Heading = <h1>Hello React!!!</h1>

const rootElement =  document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(Heading)