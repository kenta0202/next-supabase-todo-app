import Layout from 'components/general/layout/Layout'
import Count from 'pages/sample/redux/Count'

const IndexPage = () => {
  return (
    <>
      <h1 className=" text-lg text-red-400">func D 👋 </h1>
      <Count />
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default IndexPage
