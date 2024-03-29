import React from 'react'
import Head from 'next/head'
import Layout from '../Components/Layout'
import Breadcrumb from '../Components/Breadcrumb'
import { useTranslation } from 'react-i18next'

export default function Languages () {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Layout>
      <Head>
        <title>switchLanguage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Breadcrumb paths={[{ href: '/languages', label: 'switch language' }]} />

        <div className={'holder_white'}>
          <h2>Partners</h2>
          <div onChange={changeLanguage}>
            <input type="radio" value="en" name="language" defaultChecked /> English
            <input type="radio" value="fa" name="language"/> فارسی
          </div>
        </div>
      </div>
    </Layout>
  )
}
