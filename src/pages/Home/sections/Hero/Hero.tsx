import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.jpg"
import { Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

  const StyledHero = styled("div")(()=> ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display:"flex",
    alignItems:"center",
  }))
    const StyleImg = styled("img")(({theme})=> ({
    width: "80%",
    borderRadius: "50%",
    border:`3px solid ${theme.palette.primary.contrastText}`
  }))
 
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <StyleImg src={Avatar}/>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Renan Cordeiro</Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Product Designer and Front-end Developer</Typography>
                <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center" >
                    <StyledButton>
                      <DownloadIcon/>
                       <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <StyledButton>
                      <EmailIcon/>
                      <Typography>Contact Me</Typography>
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
