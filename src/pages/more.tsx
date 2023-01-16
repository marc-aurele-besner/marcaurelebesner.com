import dynamic from 'next/dynamic'
import More from '../components/dom/More'

const CubePoints = dynamic(() => import('../components/canvas/CubePoints'), { ssr: false })

const Page = (props: any) => {
  return <More />
}

Page.canvas = (props: any) => <CubePoints route='/' position-y={0.25} />

export const getStaticProps = async () => {
  return { props: { title: 'More about me' } }
}

export default Page
