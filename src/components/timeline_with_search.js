import React            from 'react';
import rehypeReact      from 'rehype-react';
import Tweet            from '../components/tweet';
import { Button }       from 'semantic-ui-react';
import { Container }    from 'semantic-ui-react';
import { Grid }         from 'semantic-ui-react';
import { Header }       from 'semantic-ui-react';
import { Icon }         from 'semantic-ui-react';
import { Input }        from 'semantic-ui-react';
import { Form }         from 'semantic-ui-react';
import { Timeline }     from 'vertical-timeline-component-for-react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import { useState }     from 'react';


const render = new rehypeReact({
  createElement: React.createElement,
  components: {
    'tweet': Tweet
  }
}).Compiler;


export default function TimelineWithSearch({ data }) {
  const [ newestFirst, setNewestFirst ]     = useState(true);
  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchTerm, setSearchTerm ]       = useState('');

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  React.useEffect(() => {
    const results = data.filter(({ node: { html, frontmatter } }) => (
      html.toLowerCase().includes(searchTerm.toLowerCase()) || frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setSearchResults(results);
  }, [ data, searchTerm ]);

  return (
    <Container>
      <Form>
        <Grid doubling>
          <Grid.Column computer={2} only='computer'/>
          <Grid.Column computer={9} tablet={13} mobile={8}>
            <Form.Field>
              <label>Search</label>
              <Input size="mini" icon value={searchTerm} onChange={handleSearchTermChange} autoComplete={false}>
                <Icon link name={ searchTerm ? 'times' : 'search'} onClick={() => (searchTerm ? setSearchTerm('') : null)}/>
                <input />
              </Input>
            </Form.Field>
          </Grid.Column>
          <Grid.Column computer={2} tablet={3} mobile={8}>
            <Form.Field>
              <label style={{ textAlign: 'left' }}>Sort</label>
              <Button.Group size="mini">
                <Button size="mini" color="red" basic={!newestFirst}  onClick={() => setNewestFirst(true)}>Newest</Button>
                <Button size="mini" color="red" basic={newestFirst} onClick={() => setNewestFirst(false)}>Oldest</Button>
              </Button.Group>
            </Form.Field>
          </Grid.Column>
          <Grid.Column computer={3} only='computer'/>
        </Grid>
      </Form>
      {searchResults.length > 0 && (
        <Timeline className={newestFirst ? null : 'reverse'} lineColor={'#ddd'} animate={false}>
          {searchResults.map(({ node }) => {
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
      )}
      {searchResults.length === 0 && (
        <Container text textAlign="center" style={{ marginTop: '1em' }}>
          <Header>No Results</Header>
        </Container>
      )}
    </Container>
  );
}