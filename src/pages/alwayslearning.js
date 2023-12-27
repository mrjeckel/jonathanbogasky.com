import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import WordCloud from '../components/word-cloud';
import FancyList from '../components/fancy-list';

// Step 2: Define your component
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allAboutJson {
        nodes {
          title
          tag
          content {
            name
            title
            degree
            url
            rank
            date
            url
          }
        }
      }
    }
  `)

  let skills = data.allAboutJson.nodes.find(obj => obj.tag === 'skills');
  let jobs = data.allAboutJson.nodes.find(obj => obj.tag === 'jobs');
  let education = data.allAboutJson.nodes.find(obj => obj.tag === 'education');

  return (
    <Layout wrapChildren={true}>
      <div><h2>About Me</h2></div>
      <div>
        <h2>{skills.title}</h2>
        <WordCloud>
          {
            skills.content.map(skill => {
              return <p key={skill.name} rank={skill.rank}>{skill.name}</p>;
            })
          }
        </WordCloud>
      </div>
      <FancyList jsonData={jobs} />
      <FancyList jsonData={education} />
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
