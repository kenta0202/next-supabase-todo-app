import '../styles/dist.css'
import '../styles/normalize.css'
import '../styles/global.css'

import React from 'react'
import HeadInformation from 'components/general/HeadInformation'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      console.log(`FCP: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'LCP':
      console.log(`LCP: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'TTFB':
      console.log(`TTFB: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'Next.js-hydration':
      console.log(
        `Hydration: ${Math.round(metric.startTime * 10) / 10} -> ${
          Math.round((metric.startTime + metric.value) * 10) / 10
          // 終了時間を出力
        }`
      )
      break
    default:
      break
  }
}

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  // Q: AppProps型がつくとgetLayoutがはじかれる
  return (
    <>
      <HeadInformation />
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
      {/*
       Name.getLayout = function getLayout(page) {
       return <Layout>{page}</Layout>;
       各コンポーネントでGetLayoutメソッドを実行することでレイアウトを指定できる
       };
     */}
    </>
  )
}

export default MyApp
