import Layout           from '../components/layout'
import SEO              from '../components/seo'
import React            from 'react';
import rehypeReact      from 'rehype-react';
import Tweet            from '../components/tweet';
import { graphql }      from 'gatsby';
import { Timeline }     from 'vertical-timeline-component-for-react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import { useState }     from 'react';


const render = new rehypeReact({
  createElement: React.createElement,
  components: {
    'tweet': Tweet
  }
}).Compiler;


export default function IndexPage({ data }) {
  const { allMarkdownRemark }           = data;
  const { edges }                       = allMarkdownRemark;
  const [ oldestFirst, setOldestFirst ] = useState(true);

  function handleToggle() {
    setOldestFirst(!oldestFirst);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        ** This site is continuously being updated **
      </p>
      <button type="button" onClick={handleToggle}>Toggle order of events</button>
      <p style={{ textAlign: 'center', marginBottom: 0 }}>Viewing {oldestFirst ? 'oldest' : 'newest'} events first</p>
      <Timeline className={oldestFirst ? null : 'reverse'} lineColor={'#ddd'} animate={false}>
        {edges.map(({ node }) => {
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
    </Layout>
  );
}


export const query = graphql`
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
