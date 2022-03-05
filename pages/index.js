import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import MyImage from './components/image';
import Header from './header';
import Layout from './components/base/layout';

export default function Home() {

  let title = 'Detector';
  let message = 'messagemessage'
  return (
    <div className={styles.container}>
      <Layout header='Next.js' title='Top page'>
        <div className='text-center'>
          <h5>Welcom</h5>
          <Link href='./other'>
            To Others
          </Link>
          

          <MyImage fname='vercel.svg' size='300'/>
        </div>
      </Layout>
    </div>
  )
}
