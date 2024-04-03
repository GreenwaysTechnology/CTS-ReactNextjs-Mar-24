export default function Hello({ name }) {
    return <div>
        <h1>Hello {name}</h1>
    </div>
}
Hello.defaultProps = {
    name: 'Your Name'
}