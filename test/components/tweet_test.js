import assert       from 'assert';
import React        from 'react';
import Tweet        from '../../src/components/tweet';
import { shallow }  from 'enzyme';


describe('<Tweet/>', function() {
  let wrapper;

  before(function renderWrapper() {
    wrapper = shallow(<Tweet id="123456" />);
  });

  it('should render a <TwitterTweetEmbed/>', function() {
    const actual   = wrapper.find('TwitterTweetEmbed').length;
    const expected = 1;

    assert.equal(actual, expected);
  })
})