import Card from "./Card";
import Footer from "./Footer";
// import { Button, Alert } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Card
        imgLink="https://wroom.ru/i/news/11056img2.jpg"
        name="vantazivka"
        price={10}
      />
      <Footer />
      {/* <Button variant="danger">Danger</Button>
      <Alert variant="danger">This is alert—check it out!</Alert> */}
      <Button variant="contained" color="primary" disableElevation>
        Disable elevation
      </Button>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

// Домашнє завдання
// Створити три комоненти Navbar Footer і Main
// Застилізувати ці компоненти довільно
// для інформації використовувати props
// в кожній компоненті має бути описано propTypes
