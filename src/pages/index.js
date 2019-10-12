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
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        ** This site is still being set-up and updated **
      </p>
      <button type="button" onClick={handleToggle}>Toggle Order Of Events</button>
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
