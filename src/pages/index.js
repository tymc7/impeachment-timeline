import React        from "react"
import { useState } from 'react';

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
          htmlAst
        }
      }
    }
  }
`;


const IndexPage = function({ data }) {
  const { allMarkdownRemark } = data;
  const { edges }             = allMarkdownRemark;
  const [ dates, setDates ]   = useState(edges);

  function handleToggle() {
    const reversed = dates.reverse();
    setDates([ ...reversed ]);
  }

  return (
    <Layout>
    <SEO title="Home" />
    <p style={{ fontStyle: 'italic', textAlign: 'center' }}>** This site is still being set-up and updated **</p>
    <button type="button" onClick={handleToggle}>Toggle Order Of Events</button>
    <DateTimeline dates={dates}/>
  </Layout>
  );
}


function DateTimeline({ dates }) {
  return (
    <Timeline lineColor={'#ddd'} animate={false}>
      {dates.map(({ node }) => {
        return (
          <TimelineItem
            key={node.id}
            id={node.frontmatter.date}
            dateText={node.frontmatter.title}
            dateInnerStyle={{ background: '#B71C1C', color: '#FFF' }}
            style={{ color: '#B71C1C' }}>
            {render(node.htmlAst)}
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}


export default props => (
  <StaticQuery
    query={dataQuery}
    render={data => <IndexPage data={data} {...props} />}
  />
);
