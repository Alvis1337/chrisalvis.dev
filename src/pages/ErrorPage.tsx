import {Grid, Typography} from "@mui/material";

const ErrorPage = () => {
    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                marginTop: '10vh',
                padding: '10px'
            }}>
                <Typography textAlign={'center'} variant="h4">The page you are trying to navigate to does not exist, please go back or click one of our links.</Typography>
            </Grid>
        </Grid>
    );
}

export default ErrorPage;