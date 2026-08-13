import {Box} from "@mui/material";

interface LanguageIconProps {
    image: string;
    alt: string;
    language: string;
}

const LanguageIcon = (props: LanguageIconProps) => {
    return (
            <Box component={"img"} src={props.image} alt={props.alt} sx={{height: 'auto', width: {xs: '64px', md: '128px'}}}/>
    );
}

export default LanguageIcon;