import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
        <AppBar position="static" sx={{mb: '6rem'}}>
            <Toolbar disableGutters>
                <Grid container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Grid item xs={6} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                    }}>
                        <Button component={'a'} href={'https://github.com/Alvis1337/chrisalvis.me'} sx={{
                            textDecoration: 'none',
                            ml: '2rem',
                            color: 'white'
                        }} target={"_blank"}>Source</Button>
                    </Grid>
                    <Grid item xs={6} sx={{
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
                                label={'Theme Switch'}/>
                        </FormGroup>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;