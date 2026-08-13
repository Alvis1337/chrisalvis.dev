import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import BlinkCursor from "./BlinkCursor.tsx";

const experiencedIn = [
    'Full Stack Developer',
    'Mobile Developer',
    'UI/UX Designer',
    'DevOps Engineer',
    'Kubernetes Administrator',
    'Systems Engineer',
    'Database Administrator',
    'Network Engineer'
]

const ExperienceMarquee = () => {
    const [visibleText, setVisibleText] = useState('')

    const [index, setIndex] = useState(0)

    const typing = visibleText.length === experiencedIn[index].length

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < experiencedIn.length) {
                setVisibleText(prev => prev + experiencedIn[index].charAt(prev.length))
            } else {
                    clearInterval(interval)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [index])

    useEffect(() => {
        if (!typing) return

        const timeout = setTimeout(() => {
            setVisibleText('')
            setIndex(prev => prev < experiencedIn.length - 1 ? prev + 1 : 0)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [typing, index])

    return (
        <Typography variant={"h4"} component={"p"} color={'#21CE6B'} textAlign={"center"} fontWeight={"bold"} sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                {visibleText}{typing ? <BlinkCursor/> : '|'}
        </Typography>
    )
}

export default ExperienceMarquee