import {Button, Grid, Grow, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import LanguageIcon from "./LanguageIcon.tsx";
import {useState} from "react";
import WorkHistory from "./WorkHistory.tsx";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ExperienceMarquee from "./ExperienceMarquee.tsx";

const LandingPage = () => {

    const languages = [
        {
            image: "https://img.icons8.com/color/512/000000/typescript.png",
            alt: "TypeScript",
            language: "TypeScript"
        },
        {
            image: "https://img.icons8.com/color/512/000000/javascript--v1.png",
            alt: "JavaScript",
            language: "JavaScript"
        },
        {
            image: "https://img.icons8.com/color/512/000000/react-native.png",
            alt: "React",
            language: "React"
        },
        {
            image: "https://img.icons8.com/color/512/000000/redux.png",
            alt: "Redux",
            language: "Redux"
        },
        {
            image: "https://img.icons8.com/color/512/000000/angularjs.png",
            alt: "Angular",
            language: "Angular"
        },
        {
            image: "https://img.icons8.com/color/512/000000/vue-js.png",
            alt: "Vue",
            language: "Vue"
        },
        {
            image: "https://img.icons8.com/color/512/000000/html-5--v1.png",
            alt: "HTML",
            language: "HTML"
        },
        {
            image: "https://img.icons8.com/color/512/000000/css3.png",
            alt: "CSS",
            language: "CSS"
        },
        {
            image: "https://img.icons8.com/color/512/000000/sass.png",
            alt: "Sass",
            language: "Sass"
        },
        {
            image: "https://img.icons8.com/color/512/000000/nodejs.png",
            alt: "Node",
            language: "Node"
        },
        {
            image: "https://img.icons8.com/color/512/000000/mongodb.png",
            alt: "MongoDB",
            language: "MongoDB"
        },
        {
            image: "https://img.icons8.com/color/512/000000/postgreesql.png",
            alt: "PostgreSQL",
            language: "PostgreSQL"
        },
        {
            image: "https://img.icons8.com/color/512/000000/mysql-logo.png",
            alt: "MySQL",
            language: "MySQL"
        },
        {
            image: "https://img.icons8.com/color/512/000000/git.png",
            alt: "Git",
            language: "Git"
        },
        {
            image: "https://img.icons8.com/color/512/000000/docker.png",
            alt: "Docker",
            language: "Docker"
        },
        {
            image: "https://img.icons8.com/color/512/000000/kubernetes.png",
            alt: "Kubernetes",
            language: "Kubernetes"
        },
        {
            image: "https://img.icons8.com/color/512/000000/python--v1.png",
            alt: "Python",
            language: "Python"
        },
    ]
    const workExperience = [
        {
            title: "Software Engineer",
            company: "Google",
            startDate: "2021-01-01",
            endDate: "2021-12-31",
            description: "Worked on the Google Search team.",
            direction: 'flex-start',
            position: 'Software Engineer'
        },
        {
            title: "Software Engineer",
            company: "Facebook",
            startDate: "2020-01-01",
            endDate: "2020-12-31",
            description: "Worked on the Facebook Ads team.",
            direction: 'flex-end',
            position: 'Software Engineer'

        },
        {
            title: "Software Engineer",
            company: "Amazon",
            startDate: "2019-01-01",
            endDate: "2019-12-31",
            description: "Worked on the Amazon Web Services team.",
            direction: 'flex-start',
            position: 'Software Engineer'

        },
    ]

    const [more, setMore] = useState(false);

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
                        <Typography variant={"h4"} textAlign={"left"}>Hello, I'm</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} textAlign={"center"} >Chris Alvis</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ExperienceMarquee/>
                    </Grid>
                    <Grid item>
                        <Grid container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <Grid item>
                                <IconButton component={'a'} target={"_blank"} href={'https://github.com/Alvis1337'}>
                                    <GitHubIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton component={'a'} target={"_blank"} href={'https://www.linkedin.com/in/nurse-alvis/'}>
                                    <LinkedInIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton component={'a'} target={"_blank"} href={'mailto:hire@chrisalvis.dev'}>
                                    <AlternateEmailIcon/>
                                </IconButton>
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
                    {languages.map((language, index) => {
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
            <Grid item md={6}>
                <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    pb: '4rem'
                }} spacing={2}>
                    {workExperience.map((job, index) => {
                        return (
                            <WorkHistory key={index} company={job.company} direction={job.direction}
                                         date={`${job.startDate} - ${job.endDate}`} description={job.description}
                                         position={job.position}/>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingPage