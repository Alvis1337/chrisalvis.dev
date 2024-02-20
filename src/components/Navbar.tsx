import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button, FormControlLabel, FormGroup, Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {setDarkTheme} from "../store/slices/themeState.tsx";
import MaterialUISwitch from "./MaterialUISwitch.tsx";

function Navbar() {

    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.themeState)
    const getTheme = !theme ? false : theme;

    const handleTheme = () => {
        dispatch(setDarkTheme(!getTheme));
    }

    return (
        <AppBar position="static" sx={{mb: '12rem'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ChrisAlvis
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1}}>
                        <Grid container sx={{
                            display: {xs: 'none', md: 'flex'},
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Grid item xs={12} sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'end',
                            }}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<MaterialUISwitch sx={{m: 1}}/>}
                                        checked={!!getTheme}
                                        defaultChecked
                                        onChange={handleTheme}
                                        label={''}/>
                                </FormGroup>
                                <Button variant={"contained"} > CV </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;