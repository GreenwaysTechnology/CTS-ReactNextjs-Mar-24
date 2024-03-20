import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

// function AlertButton(props) {
//     return <button>
//             {props.children}
//     </button>
// }
function AlertButton({ children }) {
    return <button>
        {children}
    </button>
}
function Frame({ children }) {

    return <div style={{ backgroundColor: 'yellow', padding: 10, width: 200 }}>
        {children}
    </div>
}

function Link({ children, path }) {

    return <a href={path}>{children}</a>
}


const App = () => {
    return <>

        <Frame>
            <AlertButton>
                PlayMovie
            </AlertButton>
            <AlertButton>
                uploadImage
            </AlertButton>
            <Link path="http://www.google.com">
                google
            </Link>
            <Link path="http://www.facebook.com">
                facebook
            </Link>
        </Frame>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
