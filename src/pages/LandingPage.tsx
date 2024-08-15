import {Button, Grid, Grow, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import LanguageIcon from "../components/LanguageIcon.tsx";
import {Suspense, useState, lazy} from "react";
import WorkHistory from "../components/WorkHistory.tsx";
import {socialLinksList} from '../assets/socialLinks.tsx'
import { technologyIconsList } from "../assets/technologyIcons.tsx";
import { workExperienceList } from "../assets/workExperience.tsx";
import { greetingList } from "../assets/greeting.tsx";

import LoadingExperienceMarquee from "../components/LoadingExperienceMarquee.tsx";
import Certifications from "../components/Certifications.tsx";

const LandingPage = () => {

    const [more, setMore] = useState(false);

    const ExperienceMarquee = lazy(() => import('../components/ExperienceMarquee.tsx'));

    return (
        <Grid container sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: {xs: 'column', md: 'row'},
            flexWrap: 'wrap',
        }} spacing={12}>
            <Grid item md={6}>
                <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                }} spacing={2}>
                    <Grid item>
                        <Typography variant={"h4"} textAlign={"left"}>{greetingList.intro}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} textAlign={"center"}>{greetingList.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Suspense fallback={<LoadingExperienceMarquee/>}>
                        <ExperienceMarquee/>
                        </Suspense>
                    </Grid>
                    <Grid item>
                        <Grid container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <Grid item>
                                {socialLinksList.map((link, index) => {
                                        return (
                                            <IconButton key={index} component={'a'} title={link.title} target={"_blank"} href={link.href}>
                                                {link.icon}
                                            </IconButton>
                                        )
                                    }
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={6}>
                <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }} spacing={4}>
                    {technologyIconsList.map((language, index) => {
                        if (more) {
                            return (
                                <Grow key={index} in={true} timeout={1000}>
                                    <Grid item
                                          sx={{
                                              display: 'flex',
                                              justifyContent: 'center',
                                          }}
                                          xs={4}
                                          key={index}>
                                        <LanguageIcon
                                            key={index}
                                            image={language.image}
                                            alt={language.alt}
                                            language={language.language}/>
                                    </Grid>
                                </Grow>
                            )
                        } else {
                            if (index < 9) {
                                return (
                                    <Grow in={true} timeout={1000} key={index}>
                                        <Grid item
                                              sx={{
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                              }}
                                              xs={4}
                                              key={index}>
                                            <LanguageIcon
                                                key={index}
                                                image={language.image}
                                                alt={language.alt}
                                                language={language.language}/>
                                        </Grid>
                                    </Grow>
                                )
                            }
                        }
                    })}
                    <Grid item sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }} xs={12}>
                        <Button sx={{color: 'white'}}
                                onClick={() => setMore(!more)}> {more ? "Show Less" : "Show More"} </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={8}>
                <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    pb: '4rem'
                }} spacing={2}>
                    {workExperienceList.map((job, index) => {
                        return (
                            <WorkHistory key={index} company={job.company} direction={job.direction}
                                         date={`${job.startDate} - ${job.endDate}`} description={job.description}
                                         position={job.position}/>
                        )
                    })}
                </Grid>
            </Grid>
            <Grid item md={8}>
            <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    pb: '4rem'
                }} spacing={2}>
                <Certifications/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingPage