import {Grid} from "@mui/material";

interface LanguageIconProps {
    image: string;
    alt: string;
    language: string;
}

const LanguageIcon = (props: LanguageIconProps) => {
    return (
            <Grid item component={"img"} xs={2} src={props.image} alt={props.alt} />
    );
}

export default LanguageIcon;