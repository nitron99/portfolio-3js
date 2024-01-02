import React from 'react';
// import Stepper from '../../components/Stepper/Stepper';

import { 
  Box, 
  Container, 
  Typography,
  Link,
  IconButton
} from '@mui/material';

// import GetoutLogo from "../../assets/icons/getout.png";
// import TriumLogo from "../../assets/icons/trium.jpg";
// import ZapilioLogo from "../../assets/icons/zapilio.jpg";

import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./styles.scss";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      {/* <Stepper /> */}
      <Box
        className="flexCenterCenterColumn"
        sx={{ height: "100vh" }}>
        <Typography
          sx={{ typography: { xs: "h3", sm: "h2", md: "h2", lg: "h2"}}}>
          Hi, I'm <span style={{ color: "#009688" }}>Nitin</span>
        </Typography>
        <Typography
          sx={{ typography: { xs: "subtitle2", sm: "subtitle2", md: "subtitle1", lg: "subtitle1"}, color: "grey", maxWidth: "579px" }}>
          A Frontend Developer building Web and Mobile applications with ReactJS 
          | React Native | Kotlin | Swift and other cool frameworks.
        </Typography>
      </Box>
      {/* <div className='top'>
        <div className='top__title'></div>
        <div className='top__subtitle'>
          A Frontend Developer building Web and Mobile applications with ReactJS 
        | React Native | Kotlin | Swift and other cool frameworks.</div>
      </div> */}

      {/* skills */}
      {/* <Box
        className="flexCenterCenterColumn"
        sx={{ height: "100vh" }}>
        
      </Box> */}

      {/* experience */}
      {/* <Box 
        sx={{ 
          height: "calc(100vh - 200px)", 
          backgroundColor: "#90E4C1", 
          margin: "100px 0px 100px 0px", 
          borderRadius: "30px",
          padding: "20px"
            }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}>
          Some Startups and Companies that i helped create their tech
        </Typography>

        <Grid container gap={2}
          className='flexCenterCenterRow'>
          <Grid item xs={12} sm={12} md={4} lg={3.8}
            className='exp__card flexCenterSBRow'>
            <Box
              sx={{ width: "200px", height: "200px" }}
              className="flexCenterCenterRow">
              <img  
                src={ZapilioLogo}
                alt='zapilio-logo'
                width={200}
                />
            </Box>
            <Typography
              variant='h5'>
              Zapilio
            </Typography>
          </Grid>
            <Box
              sx={{ width: "200px", height: "200px" }}
              className="flexCenterCenterRow">
            </Box>
          <Grid item xs={12} sm={12} md={4} lg={3.8}
            className='exp__card flexCenterCenterColumn'>
            <Box
              sx={{ width: "200px", height: "200px" }}
              className="flexCenterCenterRow">
              <img  
                src={GetoutLogo}
                alt='getout-logo'
                width={180}
                />
            </Box>
            <Typography
              variant='h5'>
              Getout
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3.8}
            className='exp__card flexCenterSEColumn'>
            <Box
              sx={{ width: "200px", height: "200px" }}
              className="flexCenterCenterRow">
              <img  
                src={TriumLogo}
                alt='trium-logo'
                width={200}
                />
            </Box>
            <Typography
              variant='h5'>
              Trium Solutions
            </Typography>
          </Grid>

        </Grid>

      </Box> */}

      {/* contact */}
      <Box 
        className="flexCenterCenterColumn"
        sx={{ height: "100vh" }}>
        <Typography
          sx={{ typography: { xs: "h4", sm: "h2", md: "h2", lg: "h2"}}}>
          Contact Me
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{ color: "grey" }}>
          Want to talk about something? My inbox is always open
        </Typography>
        <Link href='tel:+919166853618'>
          <Box
            className="flexCenterCenterRow"
            sx={{ gap: "10px" }}>
            <LocalPhoneTwoToneIcon fontSize='large'  sx={{ color: "#009688" }}/>
            <Typography
              variant='h6'
              sx={{ color: "#009688" }}>
              +91-9166853618
            </Typography>
          </Box>
        </Link>
        <Link href='mailto:nitrron99@gmail.com'>
          <Box
            className="flexCenterCenterRow"
            sx={{ gap: "10px" }}>
            <EmailTwoToneIcon fontSize='large' sx={{ color: "#009688" }}/>
            <Typography
              variant='h6'
              sx={{ color: "#009688" }}>
              nitrron99@gmail.com
            </Typography>
          </Box>
        </Link>

        <Box
          className="flexCenterCenterRow"
          sx={{ gap: "20px" }}>
          <Link href="https://github.com/nitron99" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <GitHubIcon fontSize='large' sx={{ color: "#009688" }}/>
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/nitrron99/" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedInIcon fontSize='large' sx={{ color: "#009688" }}/>
            </IconButton>
          </Link>
        </Box>
      </Box>

    </Container>
  )
}

export default HomePage;