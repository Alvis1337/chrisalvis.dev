import { Box, Grid, Link } from "@mui/material"
import { certificationList } from "../assets/certificationList";
import { useEffect } from "react";

const Certifications = () => {

    useEffect(() => {
        console.log("%c Got you, there are none.", "color:red;");
    }, [])

    return (
        <Grid container sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center'
        }}>
            {certificationList.map((certification, index) => (
                <Link key={index} href={certification.link} color={'inherit'} target={'_blank'}>
                    <Box component={'img'} src={certification.image} alt={certification.alt} width={150} height={150}/>
                </Link>
            ))}
        </Grid>
    )
}

export default Certifications;
