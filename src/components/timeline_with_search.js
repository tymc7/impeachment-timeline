import React            from 'react';
import Link             from './link';
import rehypeReact      from 'rehype-react';
import Tweet            from '../components/tweet';
import YoutubeEmbed     from '../components/youtube_embed';
import { Button }       from 'semantic-ui-react';
import { Container }    from 'semantic-ui-react';
import { Grid }         from 'semantic-ui-react';
import { Header }       from 'semantic-ui-react';
import { Icon }         from 'semantic-ui-react';
import { Input }        from 'semantic-ui-react';
import { Form }         from 'semantic-ui-react';
import { Loader }       from 'semantic-ui-react';
import { Timeline }     from 'vertical-timeline-component-for-react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import { useState }     from 'react';


const render = new rehypeReact({
  createElement: React.createElement,
  components: {
    a:       Link,
    tweet:   Tweet,
    youtube: YoutubeEmbed
  }
}).Compiler;


export default function TimelineWithSearch({ data }) {
  const [ newestFirst, setNewestFirst ]     = useState(true);
  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchTerm, setSearchTerm ]       = useState('');
  const [ isLoading, setIsLoading ]         = useState(true);

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSortChange(newestFirst) {
    setNewestFirst(newestFirst);
  }

  function handleClearSearchTerm() {
    if (searchTerm)
      setSearchTerm('');
  }

  React.useEffect(() => {
    const results = data.filter(({ node: { html, frontmatter } }) => (
      html.toLowerCase().includes(searchTerm.toLowerCase()) || frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setSearchResults(results);
    setIsLoading(false)
  }, [ data, searchTerm ]);

  return (
    <Container>
      <SearchBar {...{
        searchTerm,
        newestFirst,
        handleSearchTermChange,
        handleClearSearchTerm,
        handleSortChange
      }}/>
      {isLoading && (
        <Loader active inline='centered' style={{ marginTop: '2rem' }}/>
      )}
      {!isLoading && searchResults.length > 0 && (
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
      {!isLoading && searchResults.length === 0 && (
        <Container text textAlign="center" style={{ marginTop: '1em' }}>
          <Header>No Results</Header>
        </Container>
      )}
    </Container>
  );
}


function SearchBar({ searchTerm, newestFirst, handleSearchTermChange, handleClearSearchTerm, handleSortChange }) {
  return (
    <Form>
      <Grid doubling>
        <Grid.Column computer={2} only='computer'/>
        <Grid.Column computer={9} tablet={13} mobile={8}>
          <Form.Field>
            <label>Search</label>
            <Input size="mini" icon value={searchTerm} onChange={handleSearchTermChange} autoComplete="false">
              <Icon link={ searchTerm ? true : false } name={ searchTerm ? 'times' : 'search'} onClick={handleClearSearchTerm}/>
              <input />
            </Input>
          </Form.Field>
        </Grid.Column>
        <Grid.Column computer={2} tablet={3} mobile={8}>
          <Form.Field>
            <label style={{ textAlign: 'left' }}>Sort</label>
            <Button.Group size="mini">
              <Button size="mini" color="red" basic={!newestFirst}  onClick={() => handleSortChange(true)}>Newest</Button>
              <Button size="mini" color="red" basic={newestFirst} onClick={() => handleSortChange(false)}>Oldest</Button>
            </Button.Group>
          </Form.Field>
        </Grid.Column>
        <Grid.Column computer={3} only='computer'/>
      </Grid>
    </Form>
  );
}