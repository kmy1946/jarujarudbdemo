import { makeStyles } from '@mui/styles';
import styles from '../styles/Home.module.css';
import Layout from './components/layout';
import Head from 'next/head';
import DataList from './components/products/DataList';
import { useEffect, useState } from 'react';
import TopGrid from './components/TopGrid/TopGrid';

const useStyles = makeStyles(() => ({
}));


export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/moviesdb');
  const data = await response.json();
  //console.log('data:',data)

  return { props: { data } };
}

export default function Home({data}) {
  const classes = useStyles();
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const earnedDatas = data.movies.rows
    //console.log(earnedDatas);
    setDatas(earnedDatas);
  }, [])
  //const [movies, setMovies] = useState([]);

  return (
    <div className={styles.container}>
      <Layout header='Next.js' title='Top page'>
        <Head>
          <title>ジャルジャルDB</title>
        </Head>
        <TopGrid/>
        <DataList
          datas={datas}
          //id={data.id} title={data.title} url={data.url} thumbnail={data.thumbnail}
          //views={data.views} created_at={data.created_at}
        />
      </Layout>
    </div>
  )
}
