//dom element creation using React.

import ReactDOM from 'react-dom/client';

const Heading = <h1>Hello React!!!</h1>

const rootElement =  document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(Heading)