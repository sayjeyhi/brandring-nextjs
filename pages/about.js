import Head from 'next/head'
import Layout from '../Components/Layout'
import Breadcrumb from '../Components/Breadcrumb'
import { useTranslation } from 'react-i18next'

export default function About () {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <Head>
        <title>درباره ما</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Breadcrumb paths={[{ href: '/about', label: 'about' }]} />

        <div className={'holder_white'}>
          <h2>About us</h2>
        </div>
      </div>

    </Layout>
  )
}
