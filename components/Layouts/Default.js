import Header from './Header'
import Head from 'next/head'

export default function Layout(props) {
  const { title, user, children } = props

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
        </Head>
        <Header user={user} />
        <main>{children}</main>
      </>
    )
  }