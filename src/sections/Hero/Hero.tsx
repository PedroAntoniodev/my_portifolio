import {  Box, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from '../../assets/images/perfil.jpg'
import DownloadIcon from '@mui/icons-material/Download'
import MailIcon from '@mui/icons-material/Mail'
import StyledButton from '../../components/StyledButton/StyledButton'
import { AnimatedBackground } from '../../components/AnimatedBackground/AnimatedBackground'

const Hero = () => {
  const StyledHero = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    height: '100vh',
    display: "flex",
    alignItems: "center",

  }))

  const StyledImg = styled('img')(({theme}) => ({
    width: '80%',
    borderRadius: '100%',
    border: `1px solid ${theme.palette.primary.light}`
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground/>
                </Box>
                <Box position="relative" textAlign="center">
              <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">
                Pedro Antônio
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                FullStack Developer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}  pt={2}>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  display="flex"
                  justifyContent="center"

                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Donwload CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <MailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
