import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({theme})=> ({
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`
  }))

  return (
    <>
    <AppBar position="absolute">
      <StyledToobar>
      <MenuItem>About</MenuItem>
      <MenuItem>Skills</MenuItem>
      <MenuItem>Projects</MenuItem>
      </StyledToobar>
    </AppBar>

    </>
  )
}


export default NavBar
