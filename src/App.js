import { Canvas } from '@react-three/fiber';

import { 
  createTheme, 
  ThemeProvider 
} from '@mui/material/styles';

import HomePage from './views/homePage/HomePage';

import Animation from './Animation';
import './App.scss';

const theme = createTheme({
  typography: {
    fontFamily: "urbanist",
    h1: {
      fontWeight: 900,
      fontSize: "148px"
    },
    h2: {
      fontWeight: 800,
      fontSize: "108px"
    },
    h3: {
      fontWeight: 700,
      fontSize: "72px"
    },
    h4: {
      fontWeight: 600,
      fontSize: "48px"
    },
    h5: {
      fontWeight: 600,
      fontSize: "32px"
    },
    h6: {
      fontWeight: 600,
      fontSize: "24px"
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "20px"
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "18px"
    },
    body1: {
      fontWeight: 500,
      fontSize: "18px"
    },
    body2: {
      fontWeight: 500,
      fontSize: "16px"
    },
    button: {
      fontWeight: 700,
      fontSize: "16px"
    },
    caption: {
      fontWeight: 500,
      fontSize: "15px"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "50px",
          minWidth: "auto",
          width: "150px",
          borderRadius: "12px"
        },
        outlined: {
          borderWidth: "1px",
          borderColor: "#0f1922",
          color: "#0f1922",
          "&: hover": {
            borderWidth: "2px",
            borderColor: "#0f1922",
            backgroundColor: "#e1e1e1"
          }
        },
        contained: {
          backgroundColor: "#0f1922",
          "&: hover": {
            backgroundColor: "#eb4034"
          }
        },
        text: {
          color: "#0f1922",
          backgroundColor: "#fce095",
          "&: hover": {
            backgroundColor: "#ffc324"
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textDecoration: "none",
          fontSize: "18px",
          "&: hover": {
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: "#009688",
          }
        }
      }
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      {/* <div id="canvas-container">
        <Canvas camera={{ fov: 75, position: [0, 0, 0]}}>
          <Animation />
        </Canvas>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
