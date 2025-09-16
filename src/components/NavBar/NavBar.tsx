import styled from "@emotion/styled"
import { AppBar, MenuItem, Toolbar } from "@mui/material"


const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display:"flex",
    justifyContent:"space-evenly",
    '&:hover': {
            color: theme.palette.secondary.main,
    }
  }))



  return (
    <>
        <AppBar position="relative">
            <StyledToolbar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Project</MenuItem>
            </StyledToolbar>
        </AppBar>
    </>
  )
}

export default NavBar
