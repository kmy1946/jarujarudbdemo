import styles from './Header.module.css';
import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: '#444',
    height:'55px',
  },
  toolbar: {
    margin: '0 auto',
    maxWidth: '100%',
    width: '100%',
  },
}
);

export default function Heading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar className={classes.menuBar}>
          <Toolbar className={classes.toolbar}>
            <div className={styles.header_left}>
              <Link href='/' className={styles.header_right_text}>
                <strong>ジャルジャルDB</strong>
              </Link>
            </div>
            <div className={styles.header_right}>
              <Link href='/' className={styles.header_right_text}>
                <strong>ジャルジャルDB</strong>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
    </div>
  )
}