import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import BlinkCursor from "./BlinkCursor.tsx";

const ExperienceMarquee = () => {
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

    const [visibleText, setVisibleText] = useState('')

    const [index, setIndex] = useState(0)

    const [typing, setTyping] = useState(false)

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
        if (visibleText.length === experiencedIn[index].length) {
            setTyping(true)
            setTimeout(() => {
                setVisibleText('')
                if(index < experiencedIn.length - 1) {
                    setIndex(prev => prev + 1)
                } else {
                    setIndex(0)
                }
            }, 3000)
        } else {
            setTyping(false)
        }
    }, [visibleText, index])

    return (
        <Typography variant={"h4"} color={'#21CE6B'} textAlign={"center"} fontWeight={"bold"} sx={{
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