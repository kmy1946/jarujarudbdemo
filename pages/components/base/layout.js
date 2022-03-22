import Head from "next/head";
import styles from './layout.module.css';
import Header from "./header";
import Footer from '../../footer';
import { AppBar, Toolbar } from "@mui/material";
import menus from '../../../data/menu.json';
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import Heading from "./Heading/Heading";


export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Heading/>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
      <>
        <br/>
        <br/>
        <br/>
        <h3>
          {props.title}
        </h3>
        {props.children}
      </>
      <Footer footer='copyright DETECTOR.'></Footer>
    </div>
  )
}