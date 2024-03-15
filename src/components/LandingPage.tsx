import {Button, Grid, Grow, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import LanguageIcon from "./LanguageIcon.tsx";
import {Suspense, useState, lazy} from "react";
import WorkHistory from "./WorkHistory.tsx";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoadingExperienceMarquee from "./LoadingExperienceMarquee.tsx";

const LandingPage = () => {

    const links = [
        {
            title: "Github",
            href: "https://github.com/Alvis1337",
            icon: <GitHubIcon/>
        },
        {
            title: 'LinkedIn',
            href: "https://www.linkedin.com/in/devops-alvis/",
            icon: <LinkedInIcon/>
        },
        {
            title: "Email",
            href: "mailto:hire@chrisalvis.dev",
            icon: <AlternateEmailIcon/>
        }
    ]
    const languages = [
        {
            image: "https://img.icons8.com/color/512/000000/kubernetes.png",
            alt: "Kubernetes",
            language: "Kubernetes"
        },
        // Gitlab CI/CD
        {
            image: "https://img.icons8.com/color/512/000000/gitlab.png",
            alt: "Gitlab",
            language: "Gitlab"
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
            image: "https://img.icons8.com/color/512/000000/python--v1.png",
            alt: "Python",
            language: "Python"
        },
        {
            image: "https://img.icons8.com/color/512/000000/typescript.png",
            alt: "TypeScript",
            language: "TypeScript"
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
            image: "https://img.icons8.com/color/512/000000/nodejs.png",
            alt: "Node",
            language: "Node"
        },
        {
            image: "https://img.icons8.com/color/512/000000/mongodb.png",
            alt: "MongoDB",
            language: "MongoDB"
        },
    ]
    const workExperience = [
        {
            title: "DevOps Engineer",
            company: "Alphatech Computing",
            startDate: "April 2019",
            endDate: "Present",
            description: 'Specialized in DevOps and Fullstack development, mastering tools like Kubernetes (K8s), Helm, React, and TypeScript. I led initiatives in disaster recovery, orchestrated seamless cloud migrations, and optimized operations for small businesses, witnessing firsthand the transformative impact of automation and streamlined processes. Eager to bring this expertise to a team, driving innovation with a focus on efficiency and scalability.',
            direction: 'flex-start',
            position: 'DevOps Engineer'
        },
        {
            title: "STNA",
            company: "Kimes Nursing Home",
            startDate: "May 2018",
            endDate: "April 2019",
            description: "Assists with direct patient care under the supervision of the RN or other medical professionals. Provide patients with help walking, exercising, and moving in and out of bed. Position, feed, bathe, dress and assist patients with grooming and other tasks.",
            direction: 'flex-end',
            position: 'Kimes Nursing Home'

        },
        {
            title: "Packaging Specialist I",
            company: "Quidel Corporation",
            startDate: "November 2016",
            endDate: "May 2018",
            description: "Responsible for performing tasks with little to no deviancy and completed tasks assigned by supervisor. Packaging of biomedical testing kits, products, live cells, mediums, etc.",
            direction: 'flex-start',
            position: 'Packaging Specialist I'

        },
    ]

    const [more, setMore] = useState(false);

    const ExperienceMarquee = lazy(() => import('./ExperienceMarquee.tsx'));

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
                        <Typography variant={"h1"} textAlign={"center"}>Chris Alvis</Typography>
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
                                {links.map((link, index) => {
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