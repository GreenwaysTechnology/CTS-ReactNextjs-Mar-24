import ReactDOM from 'react-dom/client';

export const Avatar = props => <img src={props.imageSrc} height={50} width={50} />
export const Status = props => <p>Status {props.status ? 'Available' : 'Not Available'}</p>

export const User = (props) => {
    return <div>
        <Avatar imageSrc={props.imageSrc} />
        <h1>Id {props.id}</h1>
        <p>Name {props.userName}</p>
        <p>Mail {props.mail}</p>
        <Status status={props.status} />
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

