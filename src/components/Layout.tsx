import {createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Navbar from "./Navbar.tsx";
import {useAppSelector} from "../store/hooks.ts";

const Layout = () => {
    const themeStatus = useAppSelector((state) => state.themeState);

    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto',
            subtitle1: {
                fontSize: '1rem',
                textTransform: 'none'
            },
            subtitle2: {
                fontSize: '.8rem',
                textTransform: 'none'
            }
        },
        palette: {
            mode: themeStatus ? "dark" : "light",
            primary: {
                main: '#3f51b5',
            },
            secondary: {
                main: '#f50057',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#21CE6B',
                        minWidth: '125px',
                        borderRadius: '25px',
                        '&:hover': {
                            backgroundColor: '#0f8a45',
                        }
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: themeStatus ? '#272727' : '#272727',
                    }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: themeStatus ? 'white' : 'black',
                    }
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: '100vh',
                justifyContent: 'space-between',
            }}>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Navbar/>
                        <ToastContainer/>
                        <Outlet/>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Layout