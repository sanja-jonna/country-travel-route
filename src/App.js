import React, {useState} from 'react'; 
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import myImg from "./CountryMap.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  h1Style: { 
    color: 'black', 
    fontWeight: "bold"
  }
}));

const countryDict = {
  "CAN": ["USA", "CAN"],
  "USA": ["USA"],
  "MEX": ["USA", "MEX"], 
  "BLZ": ["USA", "MEX", "BLZ"], 
  "GTM": ["USA", "MEX", "GTM"], 
  "SLV": ["USA", "MEX", "GTM", "SLV"], 
  "HND": ["USA", "MEX", "GTM", "HND"], 
  "NIC": ["USA", "MEX", "GTM", "HND", "NIC"], 
  "CRI": ["USA", "MEX", "GTM", "HND", "NIC", "CRI"], 
  "PAN": ["USA", "MEX", "GTM", "HND", "NIC", "CRI", "PAN"]
};

function App() {
  const classes = useStyles();
  const [countryCode, setCountryCode] = useState("");

  function errorMessage() { 
    alert("The country code that was entered is not recognized. Please re-enter the proper code! Valid country codes are the following: ");
    setCountryCode({countryCode: ""});
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Object.keys(countryDict)); 
    console.log("The Country Code Is: ", countryCode)

    for (let element in countryDict) { 
      if(countryCode == element) { 
        document.getElementById("countryTravelResult").innerHTML = countryDict[countryCode]; 
        return true; 
      } 
    }

    errorMessage(); 
  }

  return (
    <div className="App">

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container item xs={false} sm={4} md={7} className={classes.image}>
        <img src={myImg} alt="countryMap" ></img>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

      <div className={classes.paper}>
        <Container maxWidth="lg">
          <h1 className={classes.h1Style}> Country List Map </h1>
        </Container>

        <Typography component="h1" variant="h5">
          Identify All Countries A Driver Needs to Travel From the USA to Their Destinaiton 
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="countryCode"
            label="Destination Country Code"
            autoComplete="countryCode"
            autoFocus
            onInput={ e=>setCountryCode(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Find Path To Destination
          </Button>

        </form>

        <h2 id = "countryTravelResult"> </h2>
        
      </div>
    </Grid>
    </Grid>
    </div>
  );
}

export default App;
