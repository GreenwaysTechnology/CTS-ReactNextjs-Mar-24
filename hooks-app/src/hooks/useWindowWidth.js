import { useEffect, useState } from 'react';

//Every hooks is just js function.

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //window listner:
        window.addEventListener('resize', handleResize)
        //unMount
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    })
    return width;

}
export { useWindowWidth }
