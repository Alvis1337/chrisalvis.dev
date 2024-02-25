import Typography from "@mui/material/Typography";
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
        <Typography variant={"h4"} color={'#21CE6B'} fontWeight={"bold"}>
            {blinkCursor ? '|' : <> &nbsp; </>}
        </Typography>
    )
}

export default BlinkCursor