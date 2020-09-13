import React, { useEffect } from "react";
import Aos from "aos";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import ScrollTrigger from "react-scroll-trigger";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginbottom: 5,
  },
  root2: {
    flexGrow: 1,
    margin: 15,
  },
  root3: {},
  a: {
    textdecoration: "none",
    color: "white",
  },
  paper: {
    textAlign: "center",
  },
}));

function Projects() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          sm={12}
          md={4}
        >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Math Garden"
              height="185px"
              image="./images/Math-Garden.png"
              title="Math Garden"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Math Garden
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Machine Learning game where the user draws the correct answer on
                the canvas according to the question in order to grow the
                garden.
                <br />
                <br />
                Technologies Used: OpenCV, TensorFlow, Python, JS, CSS {
                  "&"
                }{" "}
                HTML
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://github.com/barwes02/math-garden">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="https://barwes02.github.io/math-garden/">
                <Button size="small" color="primary">
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          sm={12}
          md={4}
        >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="EngineerLink"
              height="185px"
              image="./images/EngineerLink.png"
              title="EngineerLink"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                EngineerLink
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Social media website where Engineers create their own
                profile/portfolio to connect, share, and get help from each
                other.
                <br />
                <br />
                Technologies Used: MongoDB, Express, React and Node.js
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://github.com/barwes02/EngineerLink">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="https://engineerlink.herokuapp.com/">
                <Button size="small" color="primary">
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          sm={12}
          md={4}
        >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="SpaceX Mission Stats"
              height="185px"
              image="./images/SpaceX-Mission-Stats.PNG"
              title="SpaceX Mission Stats"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                SpaceX Mission Stats
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Application that displays details of all SpaceX's previous and
                upcoming missions with available streams ready to play.
                <br />
                <br />
                Technologies Used: GraphQL, SpaceX API, Apollo and React
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://github.com/barwes02/SpaceX_Mission_Stats_API">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="https://spacex-missions-api.herokuapp.com/">
                <Button size="small" color="primary">
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          sm={12}
          md={4}
        >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Student Management System"
              height="185px"
              image="./images/VMI-photo.PNG"
              title="Student Management System"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                VMI Application
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Virtual Media Info Application that displays information about
                movies, tv shows and the people involved in them using movieDBs
                api.
                <br />
                <br />
                Technologies Used: MySQL, PHP/Laravel, MovieDB API, BootStrap 4,
                Tailwindcss, JS {"&"} HTML
              </Typography>
            </CardContent>

            <CardActions>
              <a href="https://github.com/barwes02/Virtual-Media-Info-App">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="http://vmi-app.herokuapp.com/">
                <Button size="small" color="primary">
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          sm={12}
          md={4}
        >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Student Management System"
              height="185px"
              image="./images/Sms.png"
              title="Student Management System"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                SM System
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is a Student Management system where the user can manage
                the Student Database. The user is able to create, read, update
                and delete to the Database.
                <br />
                <br />
                Technologies Used: MySQL, PHP, Laravel, BootStrap 4, CSS {
                  "&"
                }{" "}
                HTML
              </Typography>
            </CardContent>

            <CardActions>
              <a href="https://github.com/barwes02/Student_Management_System">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="http://sm-system.herokuapp.com/">
                <Button size="small" color="primary">
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          sm={12}
          md={4}
        >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="To Do App"
              height="185px"
              image="./images/To-Do-App.PNG"
              title="To Do App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                To Do App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is a To Do List application where the user can add new
                tasks to their list and tick them off when complete. The user is
                able to create, read, update and delete to the Database.
                <br />
                <br />
                Technologies Used: MySQL, PHP, Laravel, BootStrap 4, Vue, CSS{" "}
                {"&"} HTML
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://github.com/barwes02/To_Do_App">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="http://to-do-app-sbs.herokuapp.com/">
                <Button size="small" color="primary">
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => true);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="Projects" data-aos="fade-up" className={classes.root2}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="center" item xs={12}>
          <h1 className={classes.root3}>Projects</h1>
        </Grid>

        <Grid container spacing={5} alignItems="center" justify="center">
          <FormRow />
        </Grid>
        <Grid
          id="bottomGrid"
          alignItems="center"
          justify="center"
          spacing={5}
          container
        >
          <FormRow2 />
        </Grid>
      </Container>
    </div>
  );
}

export default Projects;

ReactDOM.render(<Projects />, document.getElementById("Projects"));
