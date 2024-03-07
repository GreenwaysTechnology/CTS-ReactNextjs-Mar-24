import ReactDOM from 'react-dom/client';
// import React, { Fragment } from 'react';

// const Welcome = () => {
//     return <React.Fragment>
//         <h1>Site Heading</h1>
//         <p>This is react</p>
//     </React.Fragment>
// }

// const Welcome = () => {
//     return <Fragment>
//         <h1>Site Heading</h1>
//         <p>This is react</p>
//     </Fragment>
// }

const Welcome = () => {
    return <>
        <h1>Site Heading</h1>
        <p>This is react</p>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Welcome />)
