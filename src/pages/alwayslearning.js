// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Word, WordCloud } from '../components/word-cloud'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div><h3>About Me!</h3></div>
      <WordCloud>
        <text precedence={1}>Python</text>
        <text precedence={1}>PostgreSQL</text>
        <text precedence={1}>Linux</text>
        <text precedence={2}>Docker</text>
        <text precedence={2}>Gitlab</text>
        <text precedence={3}>MongoDB</text>
        <text precedence={3}>React</text>
      </WordCloud>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
