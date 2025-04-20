import React from 'react'
import { StyledCard } from './styles'
import { Box, Container, Grid, Typography } from '@mui/material'
import AnimationComponent from '../../components/AnimationComponent/AnimationComponent'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import SchoolIcon from '@mui/icons-material/School'

const AboutSection: React.FC = () => {
  const skillsSet = [
    'Javascript',
    'Typescript',
    'React',
    'Node',
    'Git',
    'Html',
    'Css',
    'Material UI',
    'Prettier',
    'Vite',
    'Styled Components',
    'VueJs'
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Box id="About" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="right">
              <StyledCard>
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Experiência
                </Typography>
                <Typography textAlign="center">
                  Em busca de oportunidade na área de desenvolvimento
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Formação
                </Typography>
                <Typography textAlign="center">
                  Cusando analise e desenvolvimento de sistemas
                </Typography>
                <Typography textAlign="center">
                  + de 1 ano de estudo na area com cursos online
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            Olá! Eu sou o Pedro tenho 23 anos, estudante de programação na Ebac
            e cursando analise e desenvolvimento de sistemas na Uniasselvi.
            Atualmente, estou me especializando em diversas tecnologias de
            programação web, incluindo React, Node, HTML, CSS, JavaScript e
            TypeScript. Estou muito motivado para iniciar minha carreira na área
            de programação e estou ansioso para aprender e me desenvolver cada
            vez mais. Acredito que a programação seja uma área em constante
            evolução e que há sempre algo novo para aprender. Meu objetivo é se
            tornar um desenvolvedor web habilidoso e contribuir para projetos
            inovadores e desafiadores. Estou procurando por oportunidades para
            aplicar meus conhecimentos e habilidades e aprender com
            profissionais experientes.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default AboutSection
