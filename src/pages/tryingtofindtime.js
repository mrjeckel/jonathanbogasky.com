import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectGrid from '../components/project-grid';

export default function ProjectsPage() {
    const data = useStaticQuery(graphql`
      query {
        allProjectsJson {
          nodes {
            title
            tag
            content {
              name
              description
              url
              status
            }
          }
        }
      }
  `);

  let personalProjects = data.allProjectsJson.nodes.find(obj => obj.tag === 'personal');

  return (
    <Layout wrapChildren={false}>
      <ProjectGrid jsonData={personalProjects} />
    </Layout>
  );
}
