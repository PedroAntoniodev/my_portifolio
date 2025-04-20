import AnimationComponent from '../../components/AnimationComponent/AnimationComponent'
import ProjectCard, {
  ProjectCardProps
} from '../../components/ProjectCard/ProjectCard'
import { StyledExperience } from './styles'
import { Box, Container, Grid, Typography } from '@mui/material'

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Ebac Talks',
      subtitle: 'Landing Page',
      description:
        'Landing page ficticia sobre um evento com contagem e animações. Projeto desenvolvido durante o curso de fullstack da EBAC',
      srcImg: '/src/assets/images/projeto-ebacTalks.png',
      technologies: 'Html, Css, Javascript',
      webSiteUrl: 'https://ebac-talks-six-sable.vercel.app',
      codeUrl: 'https://github.com/PedroAntoniodev/ebac_talks'
    },
    {
      title: 'Sorteador',
      subtitle: 'Sorteador de números utilizando Grunt e javascript',
      description:
        'No curso de fullstack na parte de frontEnd aprendi a desenvolver um sorteador de números utilizando apenas o javascript puro e o grunt',
      srcImg: '/src/assets/images/projeto-sorteador.png',
      technologies: 'Javascript e Grunt',
      webSiteUrl: 'https://soteadorgruntpedro.vercel.app',
      codeUrl: 'https://github.com/PedroAntoniodev/soteador_grunt'
    },
    {
      title: 'Minha Laguna',
      subtitle: 'Landing page sobre a minha cidade Laguna',
      description:
        'Um projeto pessoal sobre a minha cidade Laguna, onde eu mostro algumas informações sobre ela e alguns pontos turiísticos que esta cidade possui. Estilizei essa landing page utilizando o bootstrap',
      srcImg: '/src/assets/images/projeto-minhaLaguna.png',
      technologies: 'html, css, bootstrap',
      webSiteUrl: 'https://minha-laguna.vercel.app',
      codeUrl: 'https://github.com/PedroAntoniodev/minha_laguna'
    },
    {
      title: 'Minhas Tarefas',
      subtitle:
        'Lista de tarefas, onde você pode criar, editar, excluir e marcar uma tarefa como concluida',
      description:
        'Um projeto de mais de uma rota, onde temos uma rota para criar uma tarefa, e a principal para ver todas as tarefas, editar, excluir e marcar como concluida',
      srcImg: '/src/assets/images/projeto-minhasTarefas.png',
      technologies: 'React, Typescript e Styled Components',
      webSiteUrl: 'https://agenda-contatos-react-pwwm.vercel.app',
      codeUrl: 'https://github.com/PedroAntoniodev/minhas-tarefas'
    }
  ]

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projects
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid>
              <AnimationComponent
                moveDirection={index % 2 === 0 ? 'right' : 'left'}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  webSiteUrl={project.webSiteUrl}
                  codeUrl={project.codeUrl}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  )
}

export default ProjectsSection
