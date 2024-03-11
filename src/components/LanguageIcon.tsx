import {Grid} from "@mui/material";

interface LanguageIconProps {
    image: string;
    alt: string;
    language: string;
}

const LanguageIcon = (props: LanguageIconProps) => {
    return (
            <Grid item component={"img"} xs={4} src={props.image} alt={props.alt} sx={{height: 'auto', width: {xs: '64px', md: '128px'}}}/>
    );
}

export default LanguageIcon;