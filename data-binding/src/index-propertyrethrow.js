import ReactDOM from 'react-dom/client';

export const Avatar = ({ imageSrc }) => <img src={imageSrc} height={50} width={50} />
export const Status = ({ status }) => <p>Status {status ? 'Available' : 'Not Available'}</p>

export const User = (props) => {
    // return <UserDetails
    //     id={props.id}
    //     userName={props.userName}
    //     status={props.status}
    //     mail={props.mail}
    //     imageSrc={props.imageSrc}
    // />
    return <UserDetails {...props} extra={{ address: 'Banaglore' }} />
}
export const UserDetails = props => {
    //introduce object destrucing 
    const { id, userName, status, mail, imageSrc, extra } = props
    return <div>
        <Avatar imageSrc={imageSrc} />
        <h1>Id {id}</h1>
        <p>Name {userName} -  extra</p>
        <p>Mail {mail}</p>
        <p>{extra.address}</p>
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

