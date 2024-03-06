//dom programming using plain js .

function createElement() {
    const heading = document.createElement('h1')
    heading.innerHTML = 'Hello React!'
    document.getElementById('root').appendChild(heading)
}
createElement()