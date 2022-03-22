import Head from "next/head";
import Link from 'next/link';
import Header from "./components/base/header";
import Layout from "./components/base/layout";

export default function Other(){
  const title = 'Input';
  const message = 'Input Page !!';
  
  return (
    <div>
      <Layout header='Next.js' title='other page.'>
        <div>
          <h1>{message}</h1>
          <ul>
            <ol>
              <li>
                title:
              </li>
              <li>
                content:
              </li>
              <li>
                name:
              </li>
              <li>
                date:
              </li>
              <li>
                copyright:
              </li>
            </ol>
          </ul>
          <Link href='.'>
            <button>
              &lt;&lt; Back to Index Page.
            </button>  
          </Link>
        </div>
      </Layout>
    </div>
  )
}