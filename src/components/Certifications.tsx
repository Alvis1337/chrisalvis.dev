import { Grid, Link } from "@mui/material"
import { certificationList } from "../assets/certificationList";

const Certifications = () => {
    return (
        <Grid container sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center'
        }}>
            {certificationList.map((certification, index) => {
                return (
                    <Link key={`link-index-${index}`} href={certification.link} color={'inherit'}>
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
