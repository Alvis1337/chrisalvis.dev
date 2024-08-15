import { Grid, Link } from "@mui/material"
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
            {certificationList.map((certification, index) => {
                return (
                    <Link key={`link-index-${index}`} href={certification.link} color={'inherit'} target={'_blank'}>
                        <Grid
                            key={index}
                            item
                            component={'img'}
                            src={certification.image}
                            alt={certification.alt}
                        />
                    </Link>
                );
            })}
        </Grid>
    )
}

export default Certifications;
