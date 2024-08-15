import {useEffect, useState} from "react";

const BlinkCursor = () => {

    const [blinkCursor, setBlinkCursor] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkCursor(prev => !prev)
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
            blinkCursor ? '|' : <>&nbsp;</>
    )
}

export default BlinkCursor