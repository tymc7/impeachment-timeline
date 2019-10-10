import React from "react"

import { StaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO    from "../components/seo"
import Tweet  from '../components/tweet';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import rehypeReact from "rehype-react";

const render = new rehypeReact({
  createElement: React.createElement,
  components: {
    'tweet': Tweet
  }
}).Compiler;

const dataQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            subtitle
          }
          htmlAst
        }
      }
    }
  }
`;


const IndexPage = function({ data }) {
  const { allMarkdownRemark } = data;
  const { edges }             = allMarkdownRemark;

  return (
    <Layout>
    <SEO title="Home" />
    <Timeline lineColor={'#ddd'}>
      {edges.map(({ node }) => {
        return (
          <TimelineItem
            key={node.id}
            dateText={node.frontmatter.title}
            dateInnerStyle={{ background: '#B71C1C', color: '#FFF' }}
            style={{ color: '#B71C1C' }}>
            {render(node.htmlAst)}
          </TimelineItem>
        );
      })}
    </Timeline>
  </Layout>
  );
}


export default props => (
  <StaticQuery
    query={dataQuery}
    render={data => <IndexPage data={data} {...props} />}
  />
);
