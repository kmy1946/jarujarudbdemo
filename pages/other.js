import Head from "next/head";
import Link from 'next/link';
import Header from "./components/base/header";
import Layout from "./components/base/layout";

export default function Other(){
  const title = 'Other';
  const message = 'messagemessage'
  return (
    <div>
      <Layout header='Next.js' title='other page.'>
        <Head>
          <title>others</title>
        </Head>
        <div className="mb-4">
          <h1>Other Page</h1>
          <Link href='.'>
            <button className="btn btn-primary">
              &lt;&lt; Back to Index Page.
            </button>  
          </Link>
        </div>
      </Layout>
    </div>
  )
}