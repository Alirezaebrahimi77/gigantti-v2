import Head from 'next/head'
import Header from './Header'
function Layout({children}) {
  return (
    <div className='w-full h-full'>
        <Head>
        <title>Gigantti v2</title>
        <meta name="description" content="Gigantti, ilmainen toimitus kaikkiin nettitilauksiin!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

        {children}

    </div>
  )
}

export default Layout