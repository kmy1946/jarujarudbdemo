
import Link from 'next/link';
import Layout from "./components/layout";
import '../styles/Category.module.css';
import categories from '../data/categories.json';
import subcategories from '../data/subcategories.json';

export default function Category(){
  const title = 'Category';
  const message = 'Category !!'
  return (
    <div>
      <Layout header='Next.js' title='other page.'>
        <div>
          <h1>{message}</h1>
          {
            categories.map(category => {
              return<>
                <div className="menu" key={category.id}>
                  <label htmlFor={styles.Panel1_arc}>{category.title}</label>
                  <input type="checkbox" id="Panel1_arc" className={styles.on_off} />
                  {
                    subcategories.map(sub => {
                      return <>
                        <ul>
                          <div className="menu">
                            <label htmlFor={styles.Panel1_arc}>{sub.title}</label>
                            <input type="checkbox" id="Panel1_arc" className={styles.on_off} />
                            <ul>
                              <li>li</li>
                              <li>li</li>
                            </ul>
                          </div>
                          <li>li</li>
                        </ul>
                      </>
                    })
                  }
                  
                </div>
              </>
            })
          }
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