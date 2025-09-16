import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.jpg"
import { Button, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

  const StyledHero = styled("div")(()=> ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
  }))
    const StyleImg = styled("img")(()=> ({
    width: "100%",
    borderRadius: "50%",
  }))
 
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <StyleImg src={Avatar}/>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography color="secondary.contrastText" variant="h1" textAlign="center">Renan Cordeiro</Typography>
                <Typography color="primary" variant="h2" textAlign="center">I'm a Product Designer and Front-end Developer</Typography>
                <Grid container display="flex" justifyContent="center">
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <Button>
                      <DownloadIcon/>
                      Download CV
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <Button>
                      <EmailIcon/>
                      Contact Me
                    </Button>
                    <StyledButton></StyledButton>
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
