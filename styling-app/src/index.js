import ReactDOM from 'react-dom/client';
// import './index.css';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


export const Avatar = ({ imageSrc }) => <img src={imageSrc} height={50} width={50} />
export const Status = ({ status }) => <p>Status {status ? 'Available' : 'Not Available'}</p>

export const User = (props) => {
    //introduce object destrucing 
    const { id, userName, status, mail, imageSrc } = props
    return <div className="container">
        <Avatar imageSrc={imageSrc} />
        <h1 style={{color:'red'}}>Id {id}</h1>
        <p>Name {userName}</p>
        <p>Mail {mail}</p>
        <Status status={status} />
    </div>
}

export const App = () => {
    const userName = 'Subramanian Murugan'
    const mail = 'sasubramanian_md@hotmail.com'
    const status = false
    const id = 1
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'

    return <>
        <User id={id} mail={mail} userName={userName} status={status} imageSrc={imageSrc} />
        <User id={2} mail={'murugan@gmail.com'} userName='murugan' status={true} imageSrc={imageSrc} />
        <User id={3} mail={'ram@gmail.com'} userName='ram' status={false} imageSrc={imageSrc} />
        <User id={4} mail={'sweety@hotmail.com'} userName={'Sweety'} status={false} imageSrc={imageSrc} />
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);