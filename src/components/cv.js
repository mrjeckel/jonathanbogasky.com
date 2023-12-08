import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function CV() {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(fileAbsolutePath: { regex: "/cirriculum_vitae.md/" }) {
                html
            }
        }
    `)
    
    return (
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    )
}
