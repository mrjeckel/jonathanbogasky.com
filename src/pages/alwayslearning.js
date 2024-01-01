import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
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
  `);

  let skills = data.allAboutJson.nodes.find(obj => obj.tag === 'skills');
  let jobs = data.allAboutJson.nodes.find(obj => obj.tag === 'jobs');
  let education = data.allAboutJson.nodes.find(obj => obj.tag === 'education');

  return (
    <Layout wrapChildren={true}>
      <div style={{ display: "flex", height: "100%" }}>
        <img src={headshot} style={{ width: "128px", height: "128px", marginRight: "20px", alignSelf: "center" }} />
        <span style={{ flexGrow: 1, alignSelf: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ac tincidunt vitae semper quis lectus nulla at volutpat. Amet consectetur adipiscing elit duis tristique sollicitudin nibh.
          Lobortis scelerisque fermentum dui faucibus in ornare quam. Diam vel quam elementum pulvinar etiam non.
          Elementum curabitur vitae nunc sed velit dignissim sodales ut. Arcu non odio euismod lacinia at quis risus sed vulputate.
          Purus ut faucibus pulvinar elementum integer. Auctor eu augue ut lectus arcu bibendum. Dignissim suspendisse in est ante in nibh mauris.
          Habitant morbi tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque.
          At tempor commodo ullamcorper a lacus vestibulum.
        </span>
      </div>
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
