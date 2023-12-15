// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Intro from '../components/horizontal-card'

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 2: Define your component
export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <Intro />
    </Layout>
  )
}
