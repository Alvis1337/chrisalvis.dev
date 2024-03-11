import BlinkCursor from "./BlinkCursor.tsx";
import Typography from "@mui/material/Typography";

const LoadingExperienceMarquee = () => {
    return (
        <Typography variant={"h4"} color={'#21CE6B'} textAlign={"center"} fontWeight={"bold"} sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BlinkCursor/>
        </Typography>
    )
}

export default LoadingExperienceMarquee;