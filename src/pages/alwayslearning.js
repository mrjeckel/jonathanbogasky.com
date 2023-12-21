// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import WordCloud from '../components/word-cloud'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div><h2>About Me</h2></div>
      <div>
        <h2>Things I Know</h2>
        <WordCloud>
          <p rank={1}>Python</p>
          <p rank={1}>PostgreSQL</p>
          <p rank={1}>Linux</p>
          <p rank={2}>Docker</p>
          <p rank={2}>Gitlab</p>
          <p rank={3}>MongoDB</p>
          <p rank={4}>React</p>
        </WordCloud>
      </div>
      <div>
        <h2>My Employment Chronicles</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h2>Places I've Learned</h2>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
