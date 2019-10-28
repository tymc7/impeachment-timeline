import Layout             from '../components/layout'
import SEO                from '../components/seo'
import React              from 'react';
import { graphql }        from 'gatsby';
import TimelineWithSearch from '../components/timeline_with_search';


export default function IndexPage({ data }) {
  const { allMarkdownRemark } = data;
  const { edges }             = allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <TimelineWithSearch data={edges}/>)
    </Layout>
  );
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            subtitle
          }
          html
          htmlAst
        }
      }
    }
  }
`;
