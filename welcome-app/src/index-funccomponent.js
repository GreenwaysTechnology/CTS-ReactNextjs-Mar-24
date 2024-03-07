import ReactDOM from 'react-dom/client';


//create a component : using es 5 function
// function Heading() {
//     //return jsx 
//     return <h1>
//         Hello Functional React!
//     </h1>
// }
//arrow function
// const Heading = () => {
//     return <h1>Hello</h1>
// }
const Heading = () => <h1>Hello</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(Heading())
root.render(<Heading></Heading>)