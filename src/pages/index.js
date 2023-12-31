import * as React from 'react';
import Layout from '../components/layout';
import IndexBanner from '../components/index-banner'

export default function IndexPage() {
  return (
    <Layout wrapChildren={false} pageTitle="Home Page">
      <IndexBanner />
    </Layout>
  )
}
