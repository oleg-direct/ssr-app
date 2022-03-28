import Head from 'next/head'

export default function Layout(props) {
  const { title, children } = props

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
        </Head>
        <main>{children}</main>
      </>
    )
  }