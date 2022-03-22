import datas from '../../data/data.json';

export async function getStaticPaths() {
  const paths = datas.map(data => ({
    params: { data: data.id }
  }))

  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const data = datas.find(data => data.id === params.data)
  return { props: { data } }
}
export default function Menu({ data }) {
  return <div style={{ backgroundColor: data.text }}>
    <h1>{data.id}</h1>
  </div>
}