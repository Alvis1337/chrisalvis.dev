import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

interface WorkHistoryProps {
    company: string;
    position: string;
    date: string;
    description: string;
    direction: string;
}

const WorkHistory = (props: WorkHistoryProps) => {
    return (
        <Grid item xs={10} sx={{
            display: 'flex',
            alignItems: props.direction,
            flexDirection: 'column'
        }}>
            <Typography variant={"h6"} color={'#21CE6B'} fontWeight={"bold"} textAlign={props.direction === 'flex-start' ? 'left' : 'right'}>{props.company}</Typography>
            <Typography variant={"subtitle1"} textAlign={props.direction === 'flex-start' ? 'left' : 'right'}>{props.position}</Typography>
            <Typography variant={"subtitle2"} textAlign={props.direction === 'flex-start' ? 'left' : 'right'}>{props.date}</Typography>
            <Typography variant={"body1"} textAlign={props.direction === 'flex-start' ? 'left' : 'right'}>{props.description}</Typography>
        </Grid>
    );
}

export default WorkHistory;