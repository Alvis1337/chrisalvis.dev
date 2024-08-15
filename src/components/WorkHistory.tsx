import { Grid, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";

interface WorkHistoryProps {
    company: string;
    position: string;
    date: string;
    description: string | string[];
    direction: string;
}

const WorkHistory = (props: WorkHistoryProps) => {
    const { company, position, date, description, direction } = props;

    return (
        <Grid item xs={10} sx={{
            display: 'flex',
            alignItems: direction,
            flexDirection: 'column'
        }}>
            <Typography variant={"h6"} color={'#21CE6B'} fontWeight={"bold"} textAlign={direction === 'flex-start' ? 'left' : 'right'}>
                {company}
            </Typography>
            <Typography variant={"subtitle1"} textAlign={direction === 'flex-start' ? 'left' : 'right'}>
                {position}
            </Typography>
            <Typography variant={"subtitle2"} textAlign={direction === 'flex-start' ? 'left' : 'right'}>
                {date}
            </Typography>
            {Array.isArray(description) ? (
                <List disablePadding>
                    {description.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: direction === 'flex-start' ? 'flex-start' : 'flex-end',
                                alignItems: 'center', // Align bullets and text
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            <Typography variant="body1" sx={{
                                marginRight: direction === 'flex-start' ? '8px' : '0',
                                marginLeft: direction === 'flex-end' ? '8px' : '0',
                                order: direction === 'flex-end' ? 2 : 0, // Position bullet on the right
                            }}>
                                •
                            </Typography>
                            <ListItemText primary={item} sx={{
                                textAlign: direction === 'flex-start' ? 'left' : 'right',
                            }} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant={"body1"} textAlign={direction === 'flex-start' ? 'left' : 'right'}>
                    {description}
                </Typography>
            )}
        </Grid>
    );
}

export default WorkHistory;
