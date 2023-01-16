import React from 'react'
import dynamic from 'next/dynamic'
import Instructions from '../components/dom/Instructions'

const Blockchain = dynamic(() => import('../components/canvas/CubePoints'), { ssr: false })

interface IPageProps extends React.FC {
  canvas: any
}

const Page: IPageProps = (props: any) => {
  return <Instructions />
}

Page.canvas = (props: any) => <Blockchain route='/more' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Introduction' } }
}

export default Page
