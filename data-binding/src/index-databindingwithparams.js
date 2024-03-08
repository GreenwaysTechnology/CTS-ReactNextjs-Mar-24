import ReactDOM from 'react-dom/client';

const User = (userName, mail, status, id, imageSrc) => {
    return <div>
        <img src={imageSrc} height={50} width={50} />
        <h1>Id {id}</h1>
        <p>Name {userName}</p>
        <p>Mail {mail}</p>
        <p>Status {status ? 'Available' : 'Not Available'}</p>
    </div>
}

const App = () => {
    const userName = 'Subramanian Murugan'
    const mail = 'sasubramanian_md@hotmail.com'
    const status = false
    const id = 1
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'

    return User(userName, mail, status, id, imageSrc)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

