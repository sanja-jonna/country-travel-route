import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

var countryDict = {
  "Canada": ["USA"]
};

function handleOnChange(textInput) {
  console.log(textInput);
};

function App() {
  const classes = useStyles();

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

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="countryCode"
            label="Destination Country Code"
            name="countryCode"
            autoComplete="countryCode"
            autoFocus
            onChange={this.handleOnChange}
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
      </div>
    </Grid>
    </Grid>
    </div>
  );
}

export default App;
