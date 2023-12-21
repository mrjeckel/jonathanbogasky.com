// Step 1: Import React
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout'
import WordCloud from '../components/word-cloud'

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
            rank
            date
            title
          }
        }
      }
    }
  `)

  let skills = data.allAboutJson.nodes.find(obj => obj.tag === 'skills');
  let jobs = data.allAboutJson.nodes.find(obj => obj.tag === 'jobs');

  return (
    <Layout pageTitle="About Me">
      <div><h2>About Me</h2></div>
      <div>
        <h2>{skills.title}</h2>
        <WordCloud>
          {
            skills.content.map(skill => {
              return <p rank={skill.rank}>{skill.name}</p>;
            })
          }
        </WordCloud>
      </div>
      <div>
        <h2>{jobs.title}</h2>
        <ul>
          {
            jobs.content.map(job => {
              return (
                <li key={job.name.replace(/\s/g, '')}>
                  <ul>
                    <li><h3>{job.name}</h3></li>
                    <li>{job.date}</li>
                    <li>{job.title}</li>
                  </ul>
                </li>
              );
            })
          }
          </ul>
      </div>
      <div>
        <h2>Where I Learned Stuff</h2>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
