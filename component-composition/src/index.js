//component compostion
import ReactDOM from 'react-dom/client';
// import { Welcome } from './welcome/Welcome';
import { Welcome } from './welcome'

const App = () => <Welcome />

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)