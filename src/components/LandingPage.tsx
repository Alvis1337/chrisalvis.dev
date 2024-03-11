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
            description: 'Over time I have gained experience in networking, storage engineering with a focus on Ceph and distributed storage systems, Active Directory systems administration, virtualization, and containerization through designing and delivering complete infrastructure deployments to companies throughout central Ohio. Through joining a MSP I discovered the passion that carried me fully into DevOps: creating scalable, automated, and repeatable system design. I learned very quickly that having a focus on processes meeting this criteria allows smaller teams to be more productive and deliver a much more complete and organized set of services to clients, as well as saving time and money. Automated backup/recovery process, lead 5+ disaster recoveries, and ensured no data-loss events in company’s history. Implemented Kubernetes cluster responsible for delivering 20+ websites. Created and deployed systems providing a retirement community of 500+ users with voucher-based wireless internet including software for payment-integration & accounting, networking, monitoring, and hardware. Directly oversaw successful migration to and from the cloud, including the datacenter install and network provisioning. Successful website delivery and deployment for 5+ clients using a backend and frontend that were containerised and deployed using Gitlab CI/CD to a Ubuntu VM or a Kubernetes cluster with Helm. Took on the responsibilty and made a small business profitable through establishing processes and automation that allowed a 3-4 person team to successfully service over 70 clients with a full array of IT services including VOIP, help desk, storage engineering, and technical consulting.',
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