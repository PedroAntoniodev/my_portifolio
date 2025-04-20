import { styled } from '@mui/material'

export const Img = styled('img')(({ theme }) => ({
  width: '100%',
  objectFit: 'contain',
  height: '80vh',
  padding: '10px 0px',
  [theme.breakpoints.up('md')]: {
    height: '45vh'
  }
}))

export const Card = styled('div')(({ theme }) => ({
  borderRadius: '3px',
  border: `0.5px solid ${theme.palette.primary.contrastText}`,
  backgroundColor: 'transparent',
  color: theme.palette.primary.contrastText,
  padding: '20px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  }
}))
