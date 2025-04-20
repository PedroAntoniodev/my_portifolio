import { Grid, Typography } from '@mui/material'
import * as S from './styles'
import StyledButton from '../StyledButton/StyledButton'

export interface ProjectCardProps {
  title: string
  subtitle: string
  srcImg: string
  description: string
  technologies: string
  webSiteUrl: string
  codeUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  srcImg,
  description,
  technologies,
  webSiteUrl,
  codeUrl
}) => {
  return (
    <S.Card>
      <Typography variant="h5">{title}</Typography>
      <Typography>{subtitle}</Typography>
      <S.Img src={srcImg} />
      <Typography>{description}</Typography>
      <Typography fontWeight={600} pt={2}>
        {technologies}
      </Typography>
      <Grid container spacing={1} pt={2}>
        <Grid size={{ xs: 6 }}>
          <StyledButton onClick={() => window.open(webSiteUrl)}>
            View Project
          </StyledButton>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <StyledButton onClick={() => window.open(codeUrl)}>
            View Code
          </StyledButton>
        </Grid>
      </Grid>
    </S.Card>
  )
}

export default ProjectCard
