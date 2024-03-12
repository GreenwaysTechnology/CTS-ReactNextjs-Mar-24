//Pure function rule A in react.
import ReactDOM from 'react-dom/client';

//Every component is is based on pure function with respect to "props"
const Welcome = props => {
    //side effects : props are read only
   // props.message = 'foo'
    return <div>
        <h1>{props.message}</h1>
    </div>
}

const App = () => {
    return <>
        <Welcome message="hello" />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);