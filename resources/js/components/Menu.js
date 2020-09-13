import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import image from "../../../public/images/Mount-Sinclair.jpg";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Spring } from "react-spring";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-scroll";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    a: {
        textdecoration: "none",
        color: "white",
        fontWeight: "bold"
    },
    a2: {
        textdecoration: "none",
        fontWeight: "bold",
        color: "#53595e"
    },
    title: {
        flexGrow: 1
    },
    large: {
        width: "70%",
        height: "auto",
        maxWidth: "250px"
    },
    appMenu: {
        [theme.breakpoints.down("xs")]: { display: "none" }
    },
    appCollapsedMenu: {
        [theme.breakpoints.up("sm")]: { display: "none" },
        fontWeight: "Bold"
    }
}));

function ScrollTop(props) {
    const { children, window } = props;

    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 0
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes.root}
            >
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,

    window: PropTypes.func
};

function Menu(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (anchor, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div
            className={clsx(classes.appCollapsedMenu, {
                [classes.fullList]: anchor === "Top"
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem
                    onClick={handleClickOpen}
                    className={classes.a2}
                    button
                >
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText button>CV</ListItemText>
                </ListItem>
                <a
                    id="CollapsedMenuLinks"
                    href="mailto:sbarwellsmith@gmail.com"
                >
                    <ListItem className={classes.a2} button>
                        <ListItemIcon>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText>CONTACT</ListItemText>
                    </ListItem>
                </a>
                <a id="CollapsedMenuLinks" href="https://github.com/barwes02">
                    <ListItem className={classes.a2} button>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText>GITHUB</ListItemText>
                    </ListItem>
                </a>
                <a
                    id="CollapsedMenuLinks"
                    href="https://nz.linkedin.com/in/sam-barwell-smith-bb6055144"
                >
                    <ListItem className={classes.a2} button>
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText>LINKEDIN</ListItemText>
                    </ListItem>
                </a>
            </List>
        </div>
    );

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                id="back-to-top-anchor"
                position="static"
                style={{
                    position: "absolute",
                    background: "transparent",
                    boxShadow: "none"
                }}
            >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Sam Barwell-Smith <img src="./images/Logo.png" />
                    </Typography>
                    <div className={classes.appCollapsedMenu}>
                        {" "}
                        {["top"].map(anchor => (
                            <React.Fragment key={anchor}>
                                <Button
                                    className={classes.a}
                                    onClick={toggleDrawer(anchor, true)}
                                >
                                    Menu
                                </Button>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={classes.appMenu}>
                        <Button
                            onClick={handleClickOpen}
                            id="MenuHover"
                            className={classes.a}
                        >
                            <b>CV</b>
                        </Button>
                        <a href="mailto:sbarwellsmith@gmail.com">
                            <Button id="MenuHover" className={classes.a}>
                                <b>Contact</b>
                            </Button>
                        </a>
                        <a
                            className={classes.a}
                            href="https://github.com/barwes02"
                        >
                            <IconButton id="MenuHover" color="inherit">
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <a
                            className={classes.a}
                            href="https://nz.linkedin.com/in/sam-barwell-smith-bb6055144"
                        >
                            <IconButton
                                id="MenuHover"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>

            <img
                style={{
                    top: 0,
                    height: "100vh",
                    width: "100%",
                    position: "relative"
                }}
                src="./images/Mount-Sinclair.jpg"
            />
            <div
                id="MenuIntroduction"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "black",
                    backgroundColor: "rgba(0, 0, 0, 0.8)"
                }}
            >
                <Grid container spacing={1}>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        item
                        md={12}
                        lg={6}
                    >
                        <h1
                            style={{
                                color: "white"
                            }}
                        >
                            Hi, I'm Sam. I am a Software Developer and Machine
                            Learning enthusiast.
                        </h1>
                    </Grid>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        item
                        md={12}
                        lg={6}
                    >
                        <img
                            style={{ borderRadius: "10%" }}
                            alt="Remy Sharp"
                            src="./images/DP3.jpg"
                            className={classes.large}
                        />
                    </Grid>

                    <Dialog
                        disableBackdropClick
                        disableEscapeKeyDown
                        open={open}
                        onClick={handleClose}
                    >
                        <img
                            style={{
                                top: 0,
                                height: "auto",
                                width: "100%",
                                position: "relative"
                            }}
                            src="./images/CV.PNG"
                        />
                    </Dialog>
                </Grid>
            </div>
            <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    padding: "40px",
                    transform: "translate(-50%, -50%)",
                    color: "red"
                }}
            >
                <Button
                    id="MyProjectsBtn"
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowDownwardIcon fontSize="small" />}
                >
                    My Projects
                </Button>
            </Link>
            <ScrollTop {...props}>
                <Fab
                    id="ArrowUpIcon"
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}

export default Menu;

ReactDOM.render(<Menu />, document.getElementById("Menu"));
