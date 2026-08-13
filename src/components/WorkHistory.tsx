import { Grid, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";

type Direction = 'flex-start' | 'flex-end';

interface WorkHistoryProps {
    company: string;
    position: string;
    date: string;
    description: string | string[];
    direction: Direction;
}

const WorkHistory = (props: WorkHistoryProps) => {
    const { company, position, date, description, direction } = props;
    const isStart = direction === 'flex-start';
    const textAlign = isStart ? 'left' : 'right';

    return (
        <Grid item xs={10} sx={{
            display: 'flex',
            alignItems: direction,
            flexDirection: 'column'
        }}>
            <Typography variant={"h6"} component={"h2"} color={'#21CE6B'} fontWeight={"bold"} textAlign={textAlign}>
                {company}
            </Typography>
            <Typography variant={"subtitle1"} textAlign={textAlign}>
                {position}
            </Typography>
            <Typography variant={"subtitle2"} textAlign={textAlign}>
                {date}
            </Typography>
            {Array.isArray(description) ? (
                <List disablePadding>
                    {description.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: direction,
                                alignItems: 'center', // Align bullets and text
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            <Typography variant="body1" sx={{
                                marginRight: isStart ? '8px' : '0',
                                marginLeft: isStart ? '0' : '8px',
                                order: isStart ? 0 : 2, // Position bullet on the right
                            }}>
                                •
                            </Typography>
                            <ListItemText primary={item} sx={{textAlign}} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant={"body1"} textAlign={textAlign}>
                    {description}
                </Typography>
            )}
        </Grid>
    );
}

export default WorkHistory;
