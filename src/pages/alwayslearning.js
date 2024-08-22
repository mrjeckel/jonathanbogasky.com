import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import AboutMe from '../components/about-me';
import WordCloud from '../components/word-cloud';
import FancyList from '../components/fancy-list';
import headshot from '../images/headshot.jpg'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      allAboutJson {
        nodes {
          title
          tag
          content {
            name
            rank
            url
            degree
            date
            positions {
              title
              date
            }
          }
        }
      }
    }
  `);

  let skills = data.allAboutJson.nodes.find(obj => obj.tag === 'skills');
  let jobs = data.allAboutJson.nodes.find(obj => obj.tag === 'jobs');
  let education = data.allAboutJson.nodes.find(obj => obj.tag === 'education');

  return (
    <Layout wrapChildren={true}>
      <div><AboutMe /></div>
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
  );
}
