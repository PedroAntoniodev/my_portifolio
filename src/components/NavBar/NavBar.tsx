import { AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import * as S from './styles'
import React from 'react'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      handleClose()
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <S.MobileToolbar>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSmoothScroll('About')}>
              <S.NavLink>About</S.NavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll('Skills')}>
              <S.NavLink>Contact</S.NavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll('Projects')}>
              <S.NavLink>Projects</S.NavLink>
            </MenuItem>
          </Menu>
        </S.MobileToolbar>
        <S.DesktopToolbar variant="regular">
          <S.NavLink onClick={() => handleSmoothScroll('About')}>
            <S.NavLink>About</S.NavLink>
          </S.NavLink>
          <S.NavLink onClick={() => handleSmoothScroll('Skills')}>
            <S.NavLink>Skills</S.NavLink>
          </S.NavLink>
          <S.NavLink onClick={() => handleSmoothScroll('Projects')}>
            <S.NavLink>Projects</S.NavLink>
          </S.NavLink>
        </S.DesktopToolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
