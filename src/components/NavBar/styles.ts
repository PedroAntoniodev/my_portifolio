import { styled, Toolbar } from '@mui/material'

export const NavLink = styled('a')(() => ({
  textDecoration: 'none',
  color: 'inherit'
}))

export const MobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    justifyContent: 'end'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

export const DesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}))

export const StyledToobar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '80%',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`
}))
