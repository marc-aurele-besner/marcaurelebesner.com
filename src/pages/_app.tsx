import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '../config'
import Layout from '../components/dom/Layout'
import '../styles/index.css'

const Scene = dynamic(() => import('../components/canvas/Scene'), { ssr: true })

interface IAppProps {
  Component: any
  pageProps: any
}

const App: React.FC<IAppProps> = ({ Component, pageProps = { title: 'index' } }) => {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}

export default App
